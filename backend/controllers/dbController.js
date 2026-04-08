// ── JSON File Database Controller ─────────────────────────────
// Reads and writes all app data to data/db.json
// Each project is stored by its ID as a key.

const fs   = require('fs');
const path = require('path');

const DB_PATH = path.resolve(process.env.DB_FILE || path.join(__dirname, '../data/db.json'));

// Ensure data directory and file exist
function ensureDB() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ projects: [], activeProjectId: null }, null, 2));
  }
}

function readDB() {
  ensureDB();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('DB read error:', e.message);
    return { projects: [], activeProjectId: null };
  }
}

function writeDB(data) {
  ensureDB();
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ── Exports ───────────────────────────────────────────────────

/** Return entire DB */
function getAll() {
  return readDB();
}

/** Return all projects */
function getProjects() {
  return readDB().projects || [];
}

/** Return one project by ID */
function getProject(id) {
  const db = readDB();
  return (db.projects || []).find(p => p.id === id) || null;
}

/** Save/replace all projects (bulk sync from frontend) */
function saveAll(data) {
  writeDB(data);
  return true;
}

/** Upsert a single project */
function saveProject(project) {
  const db  = readDB();
  if (!db.projects) db.projects = [];
  const idx = db.projects.findIndex(p => p.id === project.id);
  if (idx > -1) {
    db.projects[idx] = project;
  } else {
    db.projects.push(project);
  }
  writeDB(db);
  return project;
}

/** Delete a project */
function deleteProject(id) {
  const db = readDB();
  db.projects = (db.projects || []).filter(p => p.id !== id);
  writeDB(db);
  return true;
}

/** Set active project ID */
function setActiveProject(id) {
  const db = readDB();
  db.activeProjectId = id;
  writeDB(db);
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
