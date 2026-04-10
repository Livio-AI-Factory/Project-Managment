require('dotenv').config();

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { getDbPath, getPersistentRoot, getUploadDir } = require('./lib/storagePaths');

const app = express();
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3001;
const UPLOAD_DIR = getUploadDir();
const DB_PATH = getDbPath();
const PERSISTENT_ROOT = getPersistentRoot();
const STORAGE_DRIVER = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY ? 'supabase' : 'local';

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const allowedOrigins = (process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const localOrigins = [
  'http://127.0.0.1:4173',
  'http://localhost:4173',
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'http://127.0.0.1:3000',
  'http://localhost:3000'
];

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (!allowedOrigins.length || allowedOrigins.includes('*')) return callback(null, true);
    if (allowedOrigins.includes(origin) || localOrigins.includes(origin)) return callback(null, true);
    return callback(null, false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/uploads', express.static(UPLOAD_DIR));

app.use('/api/projects', require('./routes/projects'));
app.use('/api/email', require('./routes/email'));
app.use('/api/files', require('./routes/files'));

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    server: 'Livio Building Systems API',
    health: '/api/health'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    server: 'Livio Building Systems API',
    version: '1.0.0',
    storage: STORAGE_DRIVER,
    time: new Date().toISOString()
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found: ' + req.path });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, HOST, () => {
  console.log('\nLivio Building Systems API Server');
  console.log(`  URL     : http://${HOST}:${PORT}`);
  console.log(`  Health  : http://${HOST}:${PORT}/api/health`);
  console.log(`  Storage : ${STORAGE_DRIVER}`);
  console.log(`  Data    : ${DB_PATH}`);
  console.log(`  Uploads : ${UPLOAD_DIR}`);
  if (PERSISTENT_ROOT) console.log(`  Volume  : ${PERSISTENT_ROOT}`);
  console.log('');
});
