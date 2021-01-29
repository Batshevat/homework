"use strict";

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    const lines = data.split("\n");
    console.log(lines.length - 1);
});


/*const str = buffer.toString();

const lines = str.split("\n");

console.log(lines.length-1);*/


