const fs = require('fs');
const path = require('path');
const {
  hasDatabaseConfig,
  readAppStateRow,
  writeAppStateRow
} = require('../lib/db');
const { getDbPath } = require('../lib/storagePaths');

const DB_PATH = getDbPath();
const EMPTY_DB = {
  projects: [],
  activeId: null,
  activeProjectId: null,
  vendorDirectory: [],
  users: [],
  roles: [],
  perms: {},
  passwordResets: {},
  deletedProjectIds: []
};

function cloneEmptyDB() {
  return JSON.parse(JSON.stringify(EMPTY_DB));
}

function normalizeDeletedProjectIds(value) {
  const ids = Array.isArray(value)
    ? value
    : value && typeof value === 'object'
      ? Object.keys(value)
      : [];

  return [...new Set(ids.map((id) => String(id || '').trim()).filter(Boolean))];
}

function normalizeDB(data) {
  const raw = data && typeof data === 'object' ? data : {};
  const activeId = raw.activeId ?? raw.activeProjectId ?? null;
  const deletedProjectIds = normalizeDeletedProjectIds(raw.deletedProjectIds || raw.deletedProjects);

  return {
    ...cloneEmptyDB(),
    ...raw,
    projects: Array.isArray(raw.projects) ? raw.projects : [],
    vendorDirectory: Array.isArray(raw.vendorDirectory) ? raw.vendorDirectory : [],
    users: Array.isArray(raw.users) ? raw.users : [],
    roles: Array.isArray(raw.roles) ? raw.roles : [],
    perms: raw.perms && typeof raw.perms === 'object' && !Array.isArray(raw.perms) ? raw.perms : {},
    passwordResets: raw.passwordResets && typeof raw.passwordResets === 'object' && !Array.isArray(raw.passwordResets)
      ? raw.passwordResets
      : {},
    deletedProjectIds,
    activeId,
    activeProjectId: activeId
  };
}

function mergeProjectState(currentData, incomingData) {
  const current = normalizeDB(currentData);
  const incoming = normalizeDB(incomingData);
  const deletedProjectIds = normalizeDeletedProjectIds([
    ...current.deletedProjectIds,
    ...incoming.deletedProjectIds
  ]);
  const deleted = new Set(deletedProjectIds);
  const byId = new Map();

  for (const project of current.projects || []) {
    if (project?.id && !deleted.has(project.id)) byId.set(project.id, project);
  }

  for (const project of incoming.projects || []) {
    if (project?.id && !deleted.has(project.id)) byId.set(project.id, project);
  }

  const projects = [...byId.values()];
  const requestedActiveId = incoming.activeId ?? incoming.activeProjectId ?? current.activeId ?? current.activeProjectId ?? null;
  const activeId = projects.some((project) => project.id === requestedActiveId)
    ? requestedActiveId
    : projects[0]?.id || null;

  return normalizeDB({
    ...current,
    ...incoming,
    projects,
    deletedProjectIds,
    activeId,
    activeProjectId: activeId
  });
}

// ── Local-disk driver (dev fallback when DATABASE_URL is not set) ────────────
function ensureLocalDB() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(cloneEmptyDB(), null, 2));
  }
}

function readLocalDB() {
  ensureLocalDB();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return normalizeDB(JSON.parse(raw));
  } catch (e) {
    console.error('Local DB read error:', e.message);
    return cloneEmptyDB();
  }
}

function writeLocalDB(data) {
  ensureLocalDB();
  fs.writeFileSync(DB_PATH, JSON.stringify(normalizeDB(data), null, 2));
}

// ── Postgres driver (production) ─────────────────────────────────────────────
async function readPgDB() {
  const raw = await readAppStateRow('main');
  // First-boot case: ensureSchema() seeded an empty row, but in case the row
  // is absent for any reason, fall back to an empty DB.
  return normalizeDB(raw || cloneEmptyDB());
}

async function writePgDB(data) {
  const normalized = normalizeDB(data);
  await writeAppStateRow(normalized, 'main');
  return normalized;
}

// ── Unified read/write ───────────────────────────────────────────────────────
async function readDB() {
  if (hasDatabaseConfig()) {
    try {
      return await readPgDB();
    } catch (e) {
      console.error('Postgres DB read error:', e.message);
      console.error('Falling back to local JSON data.');
    }
  }

  return readLocalDB();
}

async function writeDB(data) {
  if (hasDatabaseConfig()) {
    try {
      return await writePgDB(data);
    } catch (e) {
      console.error('Postgres DB write error:', e.message);
      console.error('Falling back to local JSON file for this write.');
    }
  }

  writeLocalDB(data);
  return normalizeDB(data);
}

async function getAll() {
  return await readDB();
}

async function getProjects() {
  return (await readDB()).projects || [];
}

async function getProject(id) {
  const db = await readDB();
  return (db.projects || []).find((project) => project.id === id) || null;
}

async function saveAll(data) {
  const current = await readDB();
  const normalized = normalizeDB(data);
  const currentHasProjects = Array.isArray(current.projects) && current.projects.length > 0;
  const incomingHasProjects = Array.isArray(data?.projects) && normalized.projects.length > 0;
  const deletedIds = new Set(normalized.deletedProjectIds || []);
  const deletesKnownProject = (current.projects || []).some((project) => deletedIds.has(project.id));

  if (currentHasProjects && !incomingHasProjects && !deletesKnownProject) {
    const err = new Error('Refusing to overwrite existing projects with an empty sync payload');
    err.statusCode = 409;
    throw err;
  }

  await writeDB(mergeProjectState(current, normalized));
  return true;
}

async function saveProject(project) {
  const db = await readDB();
  const nextProject = project && typeof project === 'object' ? project : {};

  if (!db.projects) db.projects = [];
  db.deletedProjectIds = normalizeDeletedProjectIds(db.deletedProjectIds).filter((id) => id !== nextProject.id);
  const idx = db.projects.findIndex((item) => item.id === nextProject.id);

  if (idx > -1) {
    db.projects[idx] = nextProject;
  } else {
    db.projects.push(nextProject);
  }

  await writeDB(db);
  return nextProject;
}

async function deleteProject(id) {
  const db = await readDB();
  db.deletedProjectIds = normalizeDeletedProjectIds([...(db.deletedProjectIds || []), id]);
  db.projects = (db.projects || []).filter((project) => project.id !== id);
  if (db.activeId === id || db.activeProjectId === id) {
    const fallbackId = db.projects[0]?.id || null;
    db.activeId = fallbackId;
    db.activeProjectId = fallbackId;
  }
  await writeDB(db);
  return true;
}

async function setActiveProject(id) {
  const db = await readDB();
  db.activeId = id;
  db.activeProjectId = id;
  await writeDB(db);
  return true;
}

module.exports = {
  getAll,
  getProjects,
  getProject,
  saveAll,
  saveProject,
  deleteProject,
  setActiveProject
};
