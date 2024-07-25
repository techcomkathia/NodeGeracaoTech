const http = require('http');
const porta = 3001;

const modulos = require('./atividade1')

const servidor = http.createServer((req, res) => {
    res.write(`<h1> Salário: ${modulos.salario(40, 50)} </h1>`);
    res.end();
})

servidor.listen(porta);