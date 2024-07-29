// (/) ---> informacoes api
// (/funcionarios) ---> todos os funcionários
// (/funcionarios/desenvolvedores) ---> funcionários desenvolvedores

const http = require('http');

const todosFuncionarios = require('./atividade2/pessoas');

const desenvolvedores = todosFuncionarios.filter(funcionario => funcionario.cargo === 'Desenvolvedor Front-end' || funcionario.cargo === 'Desenvolvedor Back-end'|| funcionario.cargo === 'Desenvolvedor Full-stack');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(JSON.stringify({nome: 'APIDEV 1.0', ator : 'Cleitinho'}));

    } else if (req.url === '/funcionarios') {
        res.write(JSON.stringify(todosFuncionarios));

    } else if (req.url === '/funcionarios/desenvolvedores') {
        res.write(JSON.stringify(desenvolvedores));

    } else {
        res.write('Rota não encontrada');
    }
    res.end();
})

server.listen(3000);
