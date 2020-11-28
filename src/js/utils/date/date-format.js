'use strict';


const _default = (year, month, day, separate) => `${year}${separate}${month}${separate}${day}`;
const _VNT = (year, month, day, separate) => `${day}${separate}${month}${separate}${year}`;

const ONE_DAY = 864E5;
/**
 * Format date receive
 * @param {string} type format type
 */
const format = (format = 'default', after = 0, from = null, separate = '-') => {

    const time = from ? from - after * ONE_DAY : Date.now() - after * ONE_DAY;
    const date = new Date(time);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    switch (format.toLowerCase()) {
        case 'ddmmyyyy':
        case 'vnt':
            return _VNT(year, month, day, separate);
        default:
            return _default(year, month, day, separate);
    }
};


export default format;