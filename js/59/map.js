// SL - nice, should get int he habit of writing all code in IIFE though..
// SL - 1...
'use strict';

const numbers = [1, 2, 3];

function myMap(array, callback) {

    let result = [];

    // SL - Why not use forEach? no real difference though, just cooler...
    // SL - uh oh, doesnt work - i is initially undefined and therefore < array.length and nothing gets pushed onto result array!
    // SL - must initialize to 0...
    for (let i = 0; i < array.length; i++) {
        // SL - not at all a real problem, but why break this into 2 lines?
        // why not just result.push(callback(numbers[i])) ?
        const elem = callback(numbers[i]);
        result.push(elem);
    }

    return result;
}

const double = myMap(numbers, x => x * 2);

console.log(numbers, double);
