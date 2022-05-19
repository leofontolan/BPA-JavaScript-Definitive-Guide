const fs = require('fs');

console.log(1);


//=========================================================== CALLBACKS
// fs.readFile('chap13/Promises/in1.txt', (err, contents) => {
    
//     fs.readFile('chap13/Promises/in2.txt', (err, contents2) => {
//         console.log(contents.toString() + contents2.toString());
//     }
//     );}
// );


//=========================================================== PROMISES
// const rf =  file => new Promise(( resolve, reject ) => {

//     fs.readFile(file, (err, contents) => {
//         if(err) reject(err);
//         else resolve(contents);
//     });
// } );

// rf('chap13/Promises/in1.txt').then(contents => {
//     console.log(contents.toString());
// });

// rf('chap13/Promises/in2.txt').then(contents2 => {  
//     console.log(contents2.toString());
//  });


const rf =  file => new Promise(( resolve, reject ) => {

    fs.readFile(file, (err, contents) => {
        if(err) reject(err);
        else resolve(contents);
    });
} );

const init = async() => {

    try{
        const in1 = await rf('chap13/Promises/in1.txt');
        const in2 = await rf('chap13/Promises/in2.txt');
        console.log(in1.toString() + in2.toString());
        return in1.toString() + in2.toString();

    }catch(err){
        console.log(err);
    }
};

init().then( contents => console.log(contents));

console.log(init());

console.log(2);

console.log(3);
