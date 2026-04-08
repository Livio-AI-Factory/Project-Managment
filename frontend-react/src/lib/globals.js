// src/lib/globals.js
// Imports the legacy app and calls initLegacyApp() to attach all functions to window.

import { initLegacyApp } from './legacyApp.js';

export function initGlobals() {
  initLegacyApp();
}
