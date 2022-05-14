let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };

console.log(rect);


let o = { x: 1, y:2 };
let p = { x: 0, ...o };
console.log(p);
