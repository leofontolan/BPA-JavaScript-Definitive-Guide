const fs = require('fs');

console.log(1);


fs.readFile('chap13/Promises/in1.txt', (err, contents) => {
    console.log(err, String(contents));
} );


console.log(2);

console.log(3);
