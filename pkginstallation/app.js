const lodash = require("lodash");

const items = [1, [2, [3, 4, 5, [6, 7, 8, [10, 11]]]]];
const newItems = lodash.flatMapDeep(items);

console.log(newItems);
console.log(items.flat(5));
