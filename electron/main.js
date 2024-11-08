const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');
const { platform } = require('os');
const { execSync } = require('child_process');
const Store = require('electron-store');

const store = new Store();
let mainWindow;
let tray;

// Platform-specific commands
const toggleBacklight = {
  darwin: () => {
    try {
      execSync('ioreg -r -k kbd_backlight | grep brightness');
      return true;
    } catch (error) {
      console.error('Error toggling MacOS keyboard backlight:', error);
      return false;
    }
  },
  win32: () => {
    try {
      execSync('powershell "(Get-WmiObject -Namespace root/WMI -Class WmiMonitorBrightnessMethods).WmiSetBrightness(1,50)"');
      return true;
    } catch (error) {
      console.error('Error toggling Windows keyboard backlight:', error);
      return false;
    }
  },
  linux: () => {
    try {
      execSync('xbacklight -set 50');
      return true;
    } catch (error) {
      console.error('Error toggling Linux keyboard backlight:', error);
      return false;
    }
  }
};

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

function createTray() {
  tray = new Tray(path.join(__dirname, 'icon.png'));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Toggle Keyboard Light',
      click: () => {
        const success = toggleBacklight[platform()]();
        mainWindow.webContents.send('backlight-toggled', success);
      }
    },
    {
      label: 'Settings',
      click: () => mainWindow.show()
    },
    {
      label: 'Quit',
      click: () => app.quit()
    }
  ]);
  tray.setToolTip('KeyBeam Toggle');
  tray.setContextMenu(contextMenu);
}

app.whenReady().then(() => {
  createWindow();
  createTray();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('toggle-backlight', (event) => {
  const currentPlatform = platform();
  if (toggleBacklight[currentPlatform]) {
    const success = toggleBacklight[currentPlatform]();
    event.reply('backlight-toggled', success);
  }
});