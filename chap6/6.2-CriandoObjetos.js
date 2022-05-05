let x = { name: 'John', age: 30 };

let y = new Object({ name: 'Maria', age: 20 });

let empty = Object.create(Object.prototype);
let obj = Object.create({});

console.log(x)
console.log(y)
console.log(empty)
console.log(obj)