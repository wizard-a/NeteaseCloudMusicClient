
/**
 * electron 工具类
 */


/**
 * 判断当前环境是否是electron
 */
export const isElectron = () => {
    if (navigator.appVersion.indexOf('Electron') > -1) {
        return true;
    } else {
        return false;
    }
};

/**
 * 当前是否是mac系统
 */
export const isMac = () => {
    return getOS() === 'Mac';
};

/**
 * 当前是否是windows系统
 */
export const isWin = () => {
    return getOS() === 'Win';
};

/**
 * 获取当前系统类型
 */
export const getOS = () => {
    // var sUserAgent = navigator.userAgent;
    const isWin: boolean = (navigator.platform === 'Win32') || (navigator.platform === 'Windows');
    const isMac: boolean = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC')
        || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel');
    if (isMac) {
        return 'Mac';
    }
    const isUnix: boolean = (navigator.platform === 'X11') && !isWin && !isMac;
    if (isUnix) {
        return 'Unix';
    }
    const isLinux: boolean = (String(navigator.platform).indexOf('Linux') > -1);
    if (isLinux) {
        return 'Linux';
    }
    if (isWin) {
        return 'Win';
    }
    return 'other';
};

export const isElectronWin = () => {
    return isElectron() && isWin();
};
