'use strict';

const http = require('http');
const urls = [];
let complete = 0;
function get(url, index) {
    http.get(url, response => {
        let fullResult = "";
        response.on('data', data => {
            fullResult += data.toString();
        });
        response.on(end, () => {
            urls[index] = fullResult;
            if (++complete === 3) {
                urls.forEach(r => console.log(r));
            }
        });
    });
}
for (let i = 2; i < 5; i++) {
    get(process.argv[i], i - 2);
}