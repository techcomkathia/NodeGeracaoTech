const fs = require('fs');
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'melhorMusica.txt'

fs.readFile(`${caminho}/${nomeArquivo}`, codificacao, (erro, conteudo) => {
    console.log(`${conteudo} \n Todynho, Jojo (2019)`)

    return conteudo
})