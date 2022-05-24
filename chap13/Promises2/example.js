const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);


console.log(1);

//Lendo o arquivo de forma síncrona
const fileContentSync = fs.readFileSync('./chap13/Promises2/test.txt', 'utf8');
console.log(fileContentSync);

//Lendo o arquivo de forma assíncrona - Callback
const fileContent = fs.readFile('./chap13/Promises2/test.txt', (err, content) => {
    if (err) {
        console.log(err);
    } else {
        console.log(content);
    }
});

console.log(2);

//Lendo o arquivo de forma assíncrona - Promise
readFilePromise('./chap13/Promises2/test.txt', 'utf8').then(fileData => console.log(`Promise\n ${fileData}`));

console.log(3);