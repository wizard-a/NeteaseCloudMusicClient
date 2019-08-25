import { app, BrowserWindow } from 'electron';
import { join as pathJoin } from 'path';
import { format as urlFormat } from 'url';
import * as ipcMain from './ipcMain';

let mainWindow: Electron.BrowserWindow | null;


function createWindow() {
  const preloadFile = pathJoin(__dirname, './preload.js');
  mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: preloadFile,
      nodeIntegrationInWorker: false,
    },
    height: 670,
    width: 1000,
    minWidth: 1000,
    minHeight: 670,
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8001/#/');
  } else {
    const url = urlFormat({
      pathname: pathJoin(__dirname, '../renderer/index.html'),
      protocol: 'file:',
      slashes: true,
    });
    mainWindow.loadURL(url);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}


function initApp() {
  // 初始化主进程
  ipcMain.init();
  // 创建主窗口
  createWindow();
}

app.on('ready', initApp);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});



export function  getMainWindow(): BrowserWindow | null {
  return mainWindow;
}