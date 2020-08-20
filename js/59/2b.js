// SL - this one is a counter, it keeps current count in the x param passed in that it is a closure over
// but unfotunately value of x is never made visible to the user
// the returned objects "counter" member is useless though, it is always going to be the initial x passed in

// SL - not keeping track of number of counters created
window.app = window.app || {};

window.app.increment = (function (increment) {
    'use strict';
    increment.createCounter = function createCounter(x) {
        return {
            counter: x,

            add: function (a) {
                x += a;
            }
        };

    };

    return increment;
}
    (window.app.increment || {}));