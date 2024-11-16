"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = exports.capitalize = void 0;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
exports.capitalize = capitalize;
const truncate = (str, length) => str.length > length ? str.substring(0, length) + '...' : str;
exports.truncate = truncate;
