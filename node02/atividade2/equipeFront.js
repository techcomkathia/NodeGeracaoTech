const fs = require('fs')
const caminhoArquivo = './funcionarios.json'

fs.readFile(caminhoArquivo, (err, data) => {
   if (err) throw err
   let pessoas = JSON.parse(data)

   let pessoasFiltradas = pessoas.filter(pessoa => pessoa.cargo == 'Desenvolvedor Front-end')

   console.log(pessoasFiltradas)
})