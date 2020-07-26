window.app = window.app || {};

window.app.increment = (function (increment) {
    'use strict';
    increment.counter = function (a) {
        let x = 0;
        x += a;
        return x;
    };

    return increment;
}
    (window.app.increment || {}));