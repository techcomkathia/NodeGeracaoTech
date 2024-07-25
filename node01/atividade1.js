//Calcular o salário de um funcionário considerando horas trabalhadas e valor por hora.

const salario = (horas, valorHora) => {
    return horas * valorHora;
}

//Criar um objeto representando um carro com atributos e um método que retorna a descrição do carro.
const carro = { 
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020,
    descricao: function() {
        return `Carro ${carro.marca} ${this.modelo} ano ${this.ano}`;
    }
}

module.exports = { salario, carro };