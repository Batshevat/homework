"use strict";

const fs = require('fs');
const path = require('path');
module.exports = function (dir, exten, callback) {

    const ext = "." + exten;

    fs.readdir(dir, (err, files) => {
        const ff = files.filter(file =>
            path.extname(file) === ext
        );
        callback(null, ff);
    });
};
