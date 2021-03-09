class Cart {

  constructor(items) {
    this.items = items || {};
  }

  addItem(id, count) {
    const c = this.items[id] || 0;
    this.items[id] = count + c;
  }

  getItems() {
    return Object.keys(this.items).map(id => {
      const item = global.items.find(i.id === +id);
      return {
        item: item,
        count: this.items[id]
      };
    }

    );
  }
}

module.exports = Cart;