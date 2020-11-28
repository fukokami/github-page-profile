'use strict';

const TRILLION = 1e12;
const BILLION = 1e9;
const MILLION = 1e6;
const THOUSAND = 1e3;

export const shortenNumber = num => {
    if (num >= TRILLION) {
        return (num / TRILLION).toFixed(1).replace(/\.0$/, '') + 'T';
    }
    if (num >= BILLION) {
        return (num / BILLION).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= MILLION) {
        return (num / MILLION).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= THOUSAND) {
        return (num / THOUSAND).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
};

export const isNumeric = str => {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
};