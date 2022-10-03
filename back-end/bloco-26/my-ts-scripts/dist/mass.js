"use strict";
const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, base, convertTo) {
    const baseIndex = units.indexOf(base);
    const convertIndex = units.indexOf(convertTo);
    const exponent = (convertIndex - baseIndex);
    return `${value * Math.pow(10, exponent)}${convertTo}`;
}
console.log(convertMass(2, 'g', 'mg'));
console.log(convertMass(45, 'dg', 'g'));
console.log(convertMass(87, 'g', 'dag'));
