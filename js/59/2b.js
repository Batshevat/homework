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