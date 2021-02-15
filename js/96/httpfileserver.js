'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const read = fs.createReadStream(process.argv[3]);
    read.pipe(res);
}).listen(process.argv[2]);