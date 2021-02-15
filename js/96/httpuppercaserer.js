'use strict';
const http = require('http');
const map = require('through2-map');

http.createServer((req, res) => {
    if(req.method != 'POST'){
        res.statusCode = 400;
        res.end('Not a post');
    }
    req.pipe(map(data => data.toString().toUpperCase())).pipe(res);
}).listen(proccess.argv[2]);
