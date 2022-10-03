"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAreaCirculo = exports.calcAreaTrapezio = exports.calcAreaLosango = void 0;
// Exercício 1
function calcAreaLosango(dMaior, dMenor) {
    return `${(dMaior * dMenor) / 2}cm²`;
}
exports.calcAreaLosango = calcAreaLosango;
;
// Exercício 2
function calcAreaTrapezio(B, b, h) {
    return `${((b + B) * h) / 2}cm²`;
}
exports.calcAreaTrapezio = calcAreaTrapezio;
;
// Exercício 3
function calcAreaCirculo(r) {
    return `${3.24 * r * r}cm²`;
}
exports.calcAreaCirculo = calcAreaCirculo;
;
