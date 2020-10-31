 // Write code under this line
class Storage {
  constructor(goods) {
    this.items = goods;
  };
  
  getItems() {
    return this.goods;
  };
  
  addItem(item) {
    return this.items.push(item);
  };
  
  removeItem(item) {
    if (this.items.includes(item)) {
       this.items.splice(this.items.indexOf(item), 1);
        };
  };
};

console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

// const storage = new Storage(goods);

// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
