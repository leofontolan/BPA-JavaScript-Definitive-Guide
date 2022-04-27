Number("3") // => 3
String(false) // => "false": ou  false.toString()
Boolean([]) // => true

console.log(Number("3"));
console.log(String(false));
console.log(Boolean([]));


//Conversão implícita
let x = 3;
let y = "3";
let z = "4";
let w = "0";

x + "" // => String(x)
+y // => Number(x)
z-0 // => Number(x)
!!w // => Boolean(x): Note double !

console.log("\n");
console.log(typeof(x + ""));
console.log(typeof(+y));
console.log(typeof(z-0));
console.log(typeof(!!w));
console.log(!!w);