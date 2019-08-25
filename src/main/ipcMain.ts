import { ipcMain, BrowserWindow } from 'electron';
import { isWin, isMac } from './utils/system';
import {getMainWindow} from './main';



const mainClose = (event, window) => {
    if (isWin() ) {
        window.hide();
        setTimeout(() => {
            window.hide();
        }, 1000);
    }
    if (isMac()) {
        if (window.isFullScreen()) {
            window.setFullScreen(false);
            setTimeout(() => {
                window.hide();
            }, 1000);
        } else {
            window.hide();
        }
    }
    event.preventDefault();
};

const isMainWindow  = (window) => {
    const mainWindow = getMainWindow();
    if (!mainWindow) {
        return false;
    }
    return window.id === mainWindow.id;
};

export const init = () => {

    ipcMain.on('close' , (event) => {
        const {sender} = event;
        const window = BrowserWindow.fromWebContents(sender);
        if (isMainWindow(window)) {
            mainClose(event, window);
        } else {
            window.close();
        }
    });

    ipcMain.on('min', (event) => {
        const {sender} = event;
        const window = BrowserWindow.fromWebContents(sender);
        const full = window.isFullScreen();
        if (full) {
            if (isMac()) {
                window.setFullScreen(false);
            }
            setTimeout(() => {
                window.minimize();
            }, 1000);
        } else {
            window.minimize();
        }
    });

    ipcMain.on('max', (event) => {
        const {sender} = event;
        const window = BrowserWindow.fromWebContents(sender);
        if (window.isMaximized()) {
            window.unmaximize();
            if (isMac()) {
                window.setFullScreen(false);
            }
        } else {
            if (isMac()) {
                window.setFullScreen(true);
            }
            window.maximize();
        }
    });
};