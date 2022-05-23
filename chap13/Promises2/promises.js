const fs = require('fs');
const readline = require('readline');
const { promisify } = require('util');
writeFileAsync = promisify(fs.writeFile)

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


;(async function main(){
    try {
        await writeFileAsync('./teste', 'testando...'); 
    } catch (error) {
        console.error('deu ruim!', error);
    }finally{
        console.log('Finalizado...');
        terminal.close();
    }

})();
/*
terminal.question('Qual é o nome do arquivo que deseja trabalhar?\n', fileName => {

    fs.exists(fileName, exists => {

        if (exists) {
            terminal.question('O arquivo ja existe! Escreva algo para incluir\n', text => {
                if(!text){
                    console.log('o texto indicado é invalido! Tente novamente');
                    return;
                }else{
                    fs.appendFile(fileName, text, err => {
                        if (err) {
                            console.log('Erro ao incluir texto no arquivo');
                        } else {
                            console.log('Texto incluído com sucesso!');
                            terminal.close();
                        }
                    });
                }
            });
        }else{
            terminal.question('O arquivo não existe! Escreva algo para incluir', text => {
                if(!text){
                    console.log('o texto indicado é invalido! Tente novamente');
                    return;
                }else{
                    fs.writeFile(fileName, text, err => {
                        if (err) {
                            console.log('Erro ao incluir texto no arquivo');
                        } else {
                            console.log('Texto incluído com sucesso!');
                            terminal.close();
                        }
                    });
                }
            });
        }
        
    });
    terminal.close();
});
*/