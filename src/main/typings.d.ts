import {Remote} from 'electron';


interface Electron {
    // 窗口最小化
    min: () => void;
    // 窗口最大化
    max: () => void;
    // 关闭窗口
    close: () => void;

    remote?: Remote;
}

interface window {
    electron: Electron;
}