// terminal: node src/index.js arquivos/texto-web.txt

const fs = require('fs')
// file system

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

// fs.readFile(link, 'utf-8', (erro, texto) => {
//         if (erro) {
//             console.log(`Ocorreu um erro ao ler o arquivo: ${erro.message}`);
//         } else {
//             console.log(texto);
//         }
//     }
// );

fs.readFile(link, 'utf-8', (erro, texto) => {
  verificaPalavrasDuplicadas(texto);
})

// {"web": 5,
//     "computador": 3,
//     "tecnologia": 2
// }

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    });
    console.log(resultado);
}