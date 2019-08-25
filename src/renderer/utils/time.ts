
/**
 * 根据秒数获取时间字符串
 * @param seconds 秒数
 */
export const getTimeStrBySeconds = (seconds: number) => {
    if (isNaN(seconds)) {
        return '00:00';
    }
    let begin: any  = parseInt((seconds / 60).toString() , 10);
    if (begin < 10) {
        begin = `0${begin}`;
    }

    let end: any  = seconds % 60;
    if (end < 10) {
        end = `0${end}`;
    }

    return `${begin}:${end}`;
};
