window.ap = window.app || {};

windows.app.utils = (function (utils) {
    'use strict';
    utils.caseSensitiveCompare = function (a, b) {

        return a.toLowerCase() === b.toLowerCase();
    };
}(window.app.utils || {}));