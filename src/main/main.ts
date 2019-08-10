import { app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';
const contextMenu = require('electron-context-menu');

let mainWindow: Electron.BrowserWindow | null;



contextMenu({
  prepend: (defaultActions, params, browserWindow) => [
    {
      label: 'Rainbow',
      // Only show it when right-clicking images
      visible: params.mediaType === 'image',
      click: () => {
        console.log('params', params);
      },
    },
    {
      label: 'Search Google for “{selection}”',
      // Only show it when right-clicking text
      visible: params.selectionText.trim().length > 0,
      click: () => {
        // shell.openExternal(`https://google.com/search?q=${encodeURIComponent(params.selectionText)}`);
      },
    },
  ],
  showLookUpSelection: false,
});

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
    },
    width: 800,
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8000/#/');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './dist/renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

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
