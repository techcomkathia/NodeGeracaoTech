
const fs = require('fs')

function calcularFolha() {
   
   fs.readFile('./funcionarios.json', (err, data) => {
      if (err) throw err
      const pessoas = JSON.parse(data)
      let folha = 0

      pessoas.forEach((obj) => {
         folha += obj.salario
      })
      console.log(`R$ ${folha.toFixed(2)}`)
   })
}

calcularFolha()