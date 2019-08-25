

import { app, BrowserWindow, ipcRenderer, remote } from 'electron';


class Electron {
    send(channel, data = {}) {
        ipcRenderer.send(channel, data);
    }

    sendSync(channel, data) {
        return ipcRenderer.sendSync(channel, data);
    }

    close = () => {
        this.send('close');
    }

    min = () => {
        this.send('min');
    }

    max = () => {
        this.send('max');
    }
}

const electron = new Electron();

// window.electron = electron;
window.electron = electron;