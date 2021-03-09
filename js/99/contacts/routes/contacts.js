'use strict';
var express = require('express');
var router = express.Router();

let addid = 3;

let database = [
  {
    id: 1,
    first: 'Chani',
    last: 'Tropper',
    phone: '7329016270',
    email: '-'
  },
  {
    id: 2,
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
    partials: { content: "addEdit" }

  });
});

router.post('/addContact', function (req, res, next) {
  req.body.id = addid++;
  database.push(req.body);
  res.redirect('/contacts');
});


router.get('/delete/:id', function (req, res, next) {
  database = database.filter(d => d.id !== +req.params.id);
});

router.get('/edit/:id', function (req, res, next) {
  const contact = database.find(d => d.id === +req.params.id);
  res.render('layout', {
    title: 'Edit Contacts /',
    contact,
    partials: { content: "addEdit" }

  });
});

router.post('/edit/:id', function (req, res, next) {
  const contact = database.find(d => d.id === +req.params.id);

  Object.assign(contact, req.body)
});

module.exports = router;
