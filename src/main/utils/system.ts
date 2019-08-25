

export function isMac() {
    return process.platform === 'darwin';
}

export function isWin() {
    return process.platform === 'win32';
}