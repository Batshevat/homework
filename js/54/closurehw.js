'use strict';

function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 9));
console.log(multiply(4, 6));
console.log(multiply(7, 1));

/////////////////////////////////////

function getMultiplier() {
    return function (c, d) {
        console.log(c * d);
    };
}
const multiplier = getMultiplier();
multiplier(8, 9);
multiplier(6, 3);

//////////////////////////////////////

function getMultiplierTwo(e) {
    return function (f) {
        console.log(e * f);
    };
}
const multiplierseven = getMultiplierTwo(7);
multiplierseven(5);
const multiplierthree = getMultiplierTwo(3);
multiplierthree(4);