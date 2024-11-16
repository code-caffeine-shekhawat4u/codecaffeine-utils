"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = exports.generateUUID = void 0;
const generateUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return c === 'x' ? r.toString(16) : ((r & 0x3) | 0x8).toString(16);
});
exports.generateUUID = generateUUID;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.randomNumber = randomNumber;
