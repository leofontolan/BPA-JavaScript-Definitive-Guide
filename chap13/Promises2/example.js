const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);


console.log(1);

const fileContentSync = fs.readFileSync('./chap13/Promises2/test.txt', 'utf8');
console.log(fileContentSync);


const fileContent = fs.readFile('./chap13/Promises2/test.txt', (err, content) => {
    if (err) {
        console.log(err);
    } else {
        console.log(content);
    }
});

console.log(2);

console.log(3);