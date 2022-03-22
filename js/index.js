"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const WORLD = 'world';
function hello(world = WORLD) {
    return `Hello ${world}! `;
}
exports.hello = hello;
