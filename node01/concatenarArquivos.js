// Ler o conteúdo de dois arquivos, arquivo1.txt e arquivo2.txt, e concatenar o conteúdo em um novo arquivo chamado arquivoConcatenado.txt.

const fs = require('fs');
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo1 = 'arquivo1.txt'
const nomeArquivo2 = 'arquivo2.txt'
const nomeArquivoConcatenado = 'arquivoConcatenado.txt'

const caminhoArquivo1 = `${caminho}/${nomeArquivo1}`
const caminhoArquivo2 = `${caminho}/${nomeArquivo2}`
const novoArquivo = `${caminho}/${nomeArquivoConcatenado}`

fs.readFile(caminhoArquivo1, codificacao, (erro, conteudo1) => {
    fs.readFile(caminhoArquivo2, codificacao, (erro, conteudo2) => {
        fs.writeFile(novoArquivo, conteudo1 + conteudo2, (erro, dados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Arquivo criado com sucesso!')
                console.log('Conteúdo do arquivo: ')
                fs.readFile(novoArquivo, codificacao, (erro, conteudo) => {
                    console.log(conteudo)
                })
            }
        })
    })
})