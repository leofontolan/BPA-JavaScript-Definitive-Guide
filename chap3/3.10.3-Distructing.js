let [x, ...y] = [1,2,3,4]; 

console.log( [y]);
console.log( [x]);


let [a, [b, c], d] = [1, [2,2.5], 3];

console.log(`\n`)
console.log( [a]);
console.log( [b]);
console.log( [c]);
console.log( [d]);

let [first, ...rest] = "Hello";

console.log(`\n`)
console.log( [first]);
console.log( [rest]);


let transparent = {R: 0.0, G: 0.0, B: 0.0, A: 1.0}; 
let {R, G, B} = transparent;

console.log(`\n`)
console.log( {R});
console.log( {G});
console.log( {B});


const { cos: cosine, tan: tangent } = Math;
console.log(`\n`)
console.log( {cosine});
console.log( {tangent});
