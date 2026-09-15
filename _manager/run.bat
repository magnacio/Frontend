@echo off
setlocal
cd /d "%~dp0"

echo.
echo ============================================================
echo  Frontend SLA Assignment Manager
echo ============================================================
echo.

where py >nul 2>nul
if %errorlevel%==0 (
    set "PYTHON_CMD=py"
) else (
    where python >nul 2>nul
    if %errorlevel%==0 (
        set "PYTHON_CMD=python"
    ) else (
        echo Python was not found.
        echo Install Python 3 from https://www.python.org/downloads/
        echo Make sure "Add Python to PATH" is enabled.
        pause
        exit /b 1
    )
)

if not exist ".venv\Scripts\python.exe" (
    echo Creating virtual environment...
    %PYTHON_CMD% -m venv .venv
    if errorlevel 1 (
        echo Failed to create virtual environment.
        pause
        exit /b 1
    )
)

call ".venv\Scripts\activate.bat"

echo Installing/updating required packages...
python -m pip install -q --disable-pip-version-check -r requirements.txt
if errorlevel 1 (
    echo Package installation failed.
    pause
    exit /b 1
)

echo.
echo Opening Assignment Manager...
echo Keep this window open while using the application.
echo.

start "" "http://127.0.0.1:5000"
python app.py

echo.
echo Server stopped.
pause
