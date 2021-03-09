var express = require('express');
const Cart = require('../cart');
var router = express.Router();

router.route('/')
  .get((req, res, next) => {
    res.render('layout', { title: 'Express', partials: { content: 'index' }, items: global.items });
  })
  .post((req, res, next) => {

    const cart = new Cart(req.session.cart ? req.session.cart.items : {});

    console.log('before add', cart);
    cart.addItem(req.body.id, +req.body.count);
    console.log('after add', cart);

    req.session.cart = cart;
    req.session.foo = 5;

    res.redirect('/');
  });

router.GET('/cart', (req, res, next) => {
  const cart = new Cart(req.session.cart ? req.session.cart.items : {});
  res.render('layout', { title: 'Express', partials: { content: 'cart' }, items: cart.getItems() });
});


module.exports = router;
