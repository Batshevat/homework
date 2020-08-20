//SL - not really doing what I asked for. This is not a counter, its a single number. It cant ever be incremented after initial creation, and users of it cant get current count...
window.app = window.app || {};

window.app.increment = (function (increment) {
    'use strict';
    increment.counter = function (a) {
        // SL - How is it useful to have a local variable set to 0 and the do += on it?
        let x = 0;
        x += a;
        return x;
    };

    return increment;
}
    (window.app.increment || {}));