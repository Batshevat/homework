'use strict';

module.exports = (req, res, next) => {
    if (req.query.magicWord === 'please') {
        next();
    }
    next(new Error('Incorrect password'));
};