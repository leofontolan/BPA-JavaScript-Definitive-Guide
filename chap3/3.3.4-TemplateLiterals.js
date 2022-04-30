function hello() {
    return "Olá!!!";
}

const first_name = "john";

console.log(`Uma função ${hello()}`);
console.log(`Uma expressão ${first_name.toUpperCase()}`);
console.log(`Uma operação ${2 + 2}`);
console.log(`\n`);

const filename = "test.txt";
const linenumber = 42;
const exception = {message: "Something went wrong!", stack: "Something went wrong!"};

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

console.log(`Mensagem de ERRO: ${errorMessage}`);

console.log(`\n`);
console.log(String.raw`\n`.length);