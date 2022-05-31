const fs = require('fs');
const util = require('util');


//converter a método fs.readFile para uma promise.
const readFilePromise = util.promisify(fs.readFile);



console.log(1);

// Exemplo de função síncrona. Lendo um arquivo do disco.
// A execução do código é bloqueada até o arquivo ser lido.
const fileContentSync = fs.readFileSync('chap13/Promises2/callbacks/test.txt', 'utf8');
console.log(fileContentSync);


console.log(2);

// Exemplo de função assíncrona. Lendo um arquivo do disco.
// A execução do código não é bloqueada até o arquivo ser lido.
const fileContent = fs.readFile('chap13/Promises2/callbacks/test.txt', 'utf8', 
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });

console.log(3);

readFilePromise('chap13/Promises2/callbacks/test.txt', 'utf8').then(data => {
    console.log(data);
});


console.log(4);

