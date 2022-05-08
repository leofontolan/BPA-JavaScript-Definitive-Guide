let obj = { x : 1};
console.log(obj);
console.log('\n');

obj = { x : 2};
console.log(obj);
console.log('\n');


let obj3 = Object.create(obj);
obj3 = { x : 3};
console.log(obj3);


let person1 = { name: 'John', age: 30 };
let person2 = Object.create(person1);
person2.name = 'Maria';

console.log("Pessoa 2");
console.log(person2);
console.log("Pessoa 1");
console.log(person1);