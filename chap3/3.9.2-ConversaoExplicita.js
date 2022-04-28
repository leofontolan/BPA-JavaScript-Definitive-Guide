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


//Conversão explícita binária, octal e hexadecimal
let n = 17;
let binary = "0b" + n.toString(2); // binary == "0b10001"
let octal = "0o" + n.toString(8); // octal == "0o21"
let hex = "0x" + n.toString(16); // hex == "0x11"

console.log("\n");
console.log(binary);
console.log(octal);
console.log(hex);

//Conversão financeira e cientifica
let a = 123456.789;
a.toFixed(0) // => "1234567"
a.toFixed(2) // => "123456.79"
a.toFixed(5) // => "123456.78900"
a.toExponential(1) // => "1.2e+5"
a.toExponential(3) // => "1.235e+5"
a.toPrecision(4) // => "12345.7"
a.toPrecision(7) // => "123456.789"
a.toPrecision(10) // => "123456.789000"
