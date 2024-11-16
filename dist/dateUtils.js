"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeAgo = exports.formatDate = void 0;
const formatDate = (date, format) => {
    const map = {
        'YYYY': date.getFullYear().toString(),
        'MM': ('0' + (date.getMonth() + 1)).slice(-2),
        'DD': ('0' + date.getDate()).slice(-2),
        'HH': ('0' + date.getHours()).slice(-2),
        'mm': ('0' + date.getMinutes()).slice(-2),
        'ss': ('0' + date.getSeconds()).slice(-2),
    };
    return format.replace(/YYYY|MM|DD|HH|mm|ss/gi, (matched) => map[matched]);
};
exports.formatDate = formatDate;
const timeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (seconds < 60)
        return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
        return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24)
        return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
};
exports.timeAgo = timeAgo;
