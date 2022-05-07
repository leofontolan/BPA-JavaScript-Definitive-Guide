let o = {}; // o herda métodos de objeto de Object.prototype
console.log(o.__proto__ === Object.prototype);

o.x = 1; // e agora tem uma propriedade própria x.


let p = Object.create(o); //p herda propriedades de o e Object.prototype
console.log(p.__proto__ === o);
console.log(p.__proto__.__proto__ === Object.prototype);


p.y = 2; // e tem uma propriedade própria y.


let q = Object.create(p); // q herda propriedades de p, o e...
console.log(q.__proto__ === p);
console.log(q.__proto__.__proto__ === o);
console.log(q.__proto__.__proto__.__proto__ === Object.prototype);


q.z = 3; // ...Object.prototype e possui uma propriedade própria z.

let f = q.toString(); // toString é herdado de Object.prototype
q.x + q.y // =>3; x e y são herdados de o e p
console.log(q.x);
console.log(q.y);
console.log(q.z);