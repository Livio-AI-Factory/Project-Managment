const path = require('path');

function getPersistentRoot() {
  const explicitRoot = process.env.PERSISTENT_ROOT?.trim();
  if (explicitRoot) return explicitRoot;

  const railwayMount = process.env.RAILWAY_VOLUME_MOUNT_PATH?.trim();
  if (railwayMount) return railwayMount;

  return null;
}

function resolveStoragePath(explicitValue, fallbackSegments) {
  if (explicitValue && explicitValue.trim()) {
    return path.resolve(explicitValue.trim());
  }

  const persistentRoot = getPersistentRoot();
  if (persistentRoot) {
    return path.resolve(persistentRoot, ...fallbackSegments);
  }

  return path.resolve(__dirname, '..', ...fallbackSegments);
}

function getDbPath() {
  return resolveStoragePath(process.env.DB_FILE, ['data', 'db.json']);
}

function getUploadDir() {
  return resolveStoragePath(process.env.UPLOAD_DIR, ['uploads']);
}

module.exports = {
  getDbPath,
  getPersistentRoot,
  getUploadDir
};
