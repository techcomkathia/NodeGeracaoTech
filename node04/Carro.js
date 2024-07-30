const Veiculo = require('./Veiculo');

class Carro extends Veiculo{
    constructor(marca, modelo, ano, preco, qtdPortas, tipoCombustivel){
        super(marca, modelo, ano, preco);
        this.qtdPortas = qtdPortas;
        this.tipoCombustivel = tipoCombustivel;
    }

    exibirInformacoes(){
        //sobrecarga
        super.exibirInformacoes();
        console.log(`Quantidade de portas: ${this.qtdPortas}, Tipo de combustível: ${this.tipoCombustivel}`);
    }

}

module.exports = Carro;