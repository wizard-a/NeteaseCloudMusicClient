declare module '*.css';
declare module "*.png";

declare module "*.less" {

    const less: any;
  
    export default less;
  
}

interface Electron {
    // 窗口最小化
    min: () => void;
    // 窗口最大化
    max: () => void;
    // 关闭窗口
    close: () => void;
}

interface Window {
    electron: Electron;
    g_app: any;
}