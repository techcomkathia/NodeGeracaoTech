const http = require('http');
const porta = 3000;

const carro = require('./atividade1').carro;

const servidor = http.createServer((requisicao, resposta) => {
    resposta.write(carro.descricao())
    resposta.end();
}).listen(porta)
