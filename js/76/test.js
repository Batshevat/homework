(function () {
    'use strict';

    const orderElem = $('#order');


    class Item {
        constructor(name, quantity, price) {
            this.name = name;
            this.quantity = quantity;
            this.price = price;
        }
    }

    class Order {
        constructor(custname, address, items) {
            this.custname = custname;
            this.address = address;
            this.items = items;
        }
        get totalCost() {
            return Item.price;
        }
    }
    fetch('test.json')
        .then(r => r.json())
        .then(order => {
            order.Orders.forEach(or => {
                const order1 = new Order(or.Customer, or.Address, or.Items[0].Item);
                const item1 = new Item(or.Items[0].Item, or.Items[0].quantity, or.Items[0].Total);
                $(`<span> Customer: ${order1.custname}${'<br></br>'} Adress: ${order1.address}${'<br></br>'}Items: ${order1.items}
                ${'<br></br>'} Quantity: ${item1.quantity} ${'<br></br>'}Price: $${item1.price / item1.quantity} ${'<br></br>'} </span>`)
                    .appendTo(orderElem);
            });

        });




})();