const fs = require('fs')
const caminho = './funcionarios.json'
const codificacao = 'utf-8'
const listaFuncionarios = require('./pessoas')

fs.writeFile( caminho, JSON.stringify(listaFuncionarios), (erro, dados) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Arquivo criado com sucesso!')
        console.log('Conteúdo do arquivo: ')
        fs.readFile(caminho, codificacao, (erro, conteudo) => {
            if (erro) throw erro 
            console.log(conteudo)
        })
     
    }
})