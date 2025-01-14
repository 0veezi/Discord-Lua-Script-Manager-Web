@echo off
setlocal EnableDelayedExpansion

:: npm versiyonunu kontrol et
for /f "delims=" %%a in ('npm -v 2^>nul') do @set "npmV=%%a"
if defined npmV (
    echo NPM Version: !npmV!
) else (
    echo NPM isn't installed
    echo Please download and install npm from the link below:
    echo https://www.npmjs.com/get-npm
    pause
    exit /b
)

:: node versiyonunu kontrol et
for /f "delims=" %%b in ('node -v 2^>nul') do @set "nodeV=%%b"
if defined nodeV (
    echo Node Version: !nodeV!
) else (
    echo Node isn't installed
    echo Please download and install Node.js from the link below:
    echo https://nodejs.org/en/download/
    pause
    exit /b
)

:: Kullanıcıya devam etmek için tuşa basması gerektiğini söyle
echo.
echo Press any key to continue . . .
pause >nul

:: Start.bat dosyasını çalıştır
start "" "start.bat"

:: Batch dosyasını sonlandır
endlocal
exit
