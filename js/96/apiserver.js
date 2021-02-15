'use strict';

const http = require('http');
const { url } = require('inspector');

const baseURL = 'http://' + req.headers.host + '/';
const theUrl = new url(req.url, baseURL);
const { parse } = require('querystring');
const queryParams = parse(theUrl.search.substring(1));

console.log(queryParams);
const date = new Date(queryParams.iso);

http.createServer((req, res) => {
    const time = {
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
    }
    if (theUrl.pathname === "/api/parsetime") {
        res.write(JSON.stringify(time));
    } else if (theUrl.pathname === "/api/unixtime") {
        const time = {
            'unixtime': date.getTime()
        };
        res.write(JSON.stringify(time));
    } else {
        res.statusCode = 404;
        res.write('no method');
    }
    res.end();
}).listen(process.argv[2]);