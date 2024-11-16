"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkArray = exports.uniqueArray = void 0;
const uniqueArray = (arr) => [...new Set(arr)];
exports.uniqueArray = uniqueArray;
const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};
exports.chunkArray = chunkArray;
