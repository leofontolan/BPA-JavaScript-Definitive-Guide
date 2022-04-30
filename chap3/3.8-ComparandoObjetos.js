let object1 = {
    a: 1,
    b: 2,
    c: 3
}

let object2 = {
    a: 1,
    b: 2,
    c: 3
}

const object3 = object1;

console.log(`Comparando objetos: ${object1 === object2}`);
console.log(`Comparando objetos: ${object1 === object3}`);