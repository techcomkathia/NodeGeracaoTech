const Veiculo = require('./Veiculo');

class Moto extends Veiculo{
    constructor(marca, modelo, ano, preco, cilindradas, partida){
        super(marca, modelo, ano, preco); //Veículo
        this.cilindradas = cilindradas;
        this.partida = partida;
    }

    exibirInformacoes(){
        //sobreEscrita
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Preço: ${this.getPreco()}, Cilindradas: ${this.cilindradas}, Partida: ${this.partida}`);
    }

}

module.exports = Moto;