'use strict';

const numbers = [1, 2, 3];

function myMap(array, callback) {

    let result = [];

    for (let i; i < array.length; i++) {
        const elem = callback(numbers[i]);
        result.push(elem);
    }

    return result;
}

const double = myMap(numbers, x => x * 2);

console.log(numbers, double);
