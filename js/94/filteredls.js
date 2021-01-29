"use strict";

const fs = require('fs');

fs.readdir(process.argv[2], process.argv[3], function (err, list) {
    const lines = list.filter(ext => ext = process.argv[3]);
    //const newar = lines
    console.log(lines);
});
