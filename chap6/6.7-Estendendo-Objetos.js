let target = {};
let source1 = {a: 2, b: 3};
let source2 = {c: 4, d: 5};

Object.assign(target, source1, source2);

console.log(target);




let s1 = {a: 2, b: 3};
let s2 = {b: 4, d: 5};

const result = Object.assign({}, s1, s2);

console.log(result);
console.log(s1);

