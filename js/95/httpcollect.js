'use strict';

const http = require('http');

http.get(process.argv[2], response => {
    let fullResult = "";
    response.on('data', data => {
        fullResult += data.toString();
    });
    response.on(end, () => {
        console.log(fullResult.length);
        console.log(fullResult);
    });
});