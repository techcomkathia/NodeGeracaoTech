const fs = require('fs');
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'receita.txt'
const caminhoArquivo = `${caminho}/${nomeArquivo}`
const conteudo = 'Bolo de cenoura'

fs.writeFile(caminhoArquivo, conteudo, (erro,dados) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Arquivo criado com sucesso!')
        console.log('Conteúdo do arquivo: ')
        console.log(dados)
    }
 })