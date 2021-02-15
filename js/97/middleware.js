'use strict';

const app = require('connect')();

app.use('/home', (req, res, next) => {
    res.end('welcome home');
});

app.use('/location', (req, res, next) => {
    res.end('we are here');
});
app.use(require('./queryParser'));

app.use(require('./password'));

app.use('/admin', (req, res, next) => {
    res.end('youre the admin');
});

app.listen(80);