'use strict';
var express = require('express');
var router = express.Router();

const database = [
  {
    first: 'Chani',
    last: 'Tropper',
    phone: '7329016270',
    email: '-'
  },
  {
    first: 'Eliyahu',
    last: 'Tropper',
    phone: '7329016270',
    email: '-'
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts /',
    database,
    noContacts: !database.length,
    partials: { content: "contacts" },

  });
});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contacts /',
    partials: { content: "addContact" },

  });
});

router.post('/addContact', function (req, res, next) {
  database.push(req.body);
  res.redirect('/contacts');
});

module.exports = router;
