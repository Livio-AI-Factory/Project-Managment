@echo off
set "APPDIR=%~dp0frontend-react"
set "BACKENDDIR=%~dp0backend"
set "APPURL=http://127.0.0.1:4173"
set "BACKENDURL=http://127.0.0.1:3001/api/health"

echo Starting Livio Building Systems React preview...
echo Checking backend SMTP server...

powershell -NoProfile -Command "try { $r=Invoke-WebRequest -UseBasicParsing '%BACKENDURL%' -TimeoutSec 2; if($r.StatusCode -ge 200 -and $r.StatusCode -lt 500){ exit 0 } else { exit 1 } } catch { exit 1 }"
if errorlevel 1 (
  echo Starting backend on http://127.0.0.1:3001 ...
  start "Livio Backend" cmd /k "cd /d %BACKENDDIR% && if not exist node_modules (call npm.cmd install) && npm.cmd run dev"
  timeout /t 3 /nobreak >nul
) else (
  echo Backend already running.
)

cd /d "%APPDIR%"

if not exist "node_modules" (
  echo Installing React dependencies...
  call npm.cmd install
  echo.
)

if not exist "dist\index.html" (
  echo Building React app...
  call npm.cmd run build
  echo.
)

start "Livio React Preview" cmd /k "cd /d %APPDIR% && npm.cmd run preview -- --host 127.0.0.1 --port 4173"
timeout /t 4 /nobreak >nul
start "" %APPURL%
