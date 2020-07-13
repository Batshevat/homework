'use strict';

const letters = ['a', 'b', 'c', 'd'];


function myEvery(callback, array) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    } return true;
}

let uppercase = myEvery(function isUpper(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    }
    return false;
}, letters);
console.log('Uppercase?', uppercase);



let lowercase = myEvery(function (letter) {
    if (letter === letter.toLowerCase()) {
        return true;
    }
    return false;
}, letters);
console.log('Lowercase?', lowercase);


/////////////////////////////////////////////

function mySome(array, callback) {
    for (let i; i < 0; i++) {
        if (callback(array[i])) {
            return true;
        }
    } return false;
}

function isUpper(letter) {
    return letter === letter.toUpperCase();
}
console.log('mySome(letters, isUpper)', mySome(letters, isUpper));

////////////////////////////////////////////////

function onlyIf(theArray, test, action) {
    theArray.forEach(elem => {
        if (test(elem)) {
            action(elem);
        }
    });
}

console.log('onlyIf(letters, isUpper, console.log)');
onlyIf(letters, isUpper, console.log);
