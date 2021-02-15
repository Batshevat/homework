'use strict';

const net = require('net');
const server = net.createServer(function (socket) {
    const time = new Date();
    const year = time.getFullYear();
    const month = (time.getMonth() + 1).toString().padStart(2, '0');
    const day = (time.getDate() + 1).toString().padStart(2, '0');
    const hours = (time.getHours() + 1).toString().padStart(2, '0');
    const min = (time.getMinutes() + 1).toString().padStart(2, '0');

    socket.end(`${year}-${month}-${day} ${hours}:${min}\n`);
});
server.listen(procces.argv[2]);