// ── Projects API Routes ───────────────────────────────────────
// Base: /api/projects

const express = require('express');
const router  = express.Router();
const db      = require('../controllers/dbController');

// GET /api/projects — all projects
router.get('/', (req, res) => {
  res.json(db.getProjects());
});

// GET /api/projects/all — full DB (for frontend sync)
router.get('/all', (req, res) => {
  res.json(db.getAll());
});

// POST /api/projects/sync — bulk sync (frontend pushes entire DB)
router.post('/sync', (req, res) => {
  try {
    const data = req.body;
    if (!data || typeof data !== 'object') return res.status(400).json({ error: 'Invalid data' });
    db.saveAll(data);
    res.json({ ok: true, message: 'Database synced successfully' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/projects/:id — single project
router.get('/:id', (req, res) => {
  const project = db.getProject(req.params.id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

// POST /api/projects — create project
router.post('/', (req, res) => {
  try {
    const project = req.body;
    if (!project || !project.id) return res.status(400).json({ error: 'Project must have an id' });
    const saved = db.saveProject(project);
    res.status(201).json(saved);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// PUT /api/projects/:id — update project
router.put('/:id', (req, res) => {
  try {
    const project = { ...req.body, id: req.params.id };
    const saved = db.saveProject(project);
    res.json(saved);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE /api/projects/:id — delete project
router.delete('/:id', (req, res) => {
  try {
    db.deleteProject(req.params.id);
    res.json({ ok: true, message: 'Project deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// PATCH /api/projects/active/:id — set active project
router.patch('/active/:id', (req, res) => {
  try {
    db.setActiveProject(req.params.id);
    res.json({ ok: true, message: 'Active project set to ' + req.params.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
