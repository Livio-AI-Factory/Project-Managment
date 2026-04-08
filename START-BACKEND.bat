@echo off
echo ================================================
echo   Livio Building Systems — Starting Backend
echo ================================================
echo.
cd /d "%~dp0backend"

IF NOT EXIST node_modules (
  echo Installing dependencies...
  npm install
  echo.
)

echo Starting server on http://localhost:3001
echo Press Ctrl+C to stop.
echo.
npm run dev
pause
