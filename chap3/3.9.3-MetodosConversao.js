// Convertendo objeto em string
let objectString = {x:1, y:2}.toString();
console.log("\n");
console.log(objectString);

let functionString = (function(x){ f(x)}).toString();
console.log("\n");
console.log(functionString);




// Convertendo data em string
let data = new Date(2022, 0, 1);
let dataString = data.toString();
console.log("\n");
console.log(dataString);
console.log(typeof(dataString));

// Testando ValueOf
let n = new Date(2010, 0, 1); 
console.log("\n");
console.log(n.valueOf(n));