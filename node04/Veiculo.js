class Veiculo{
    #preco
    constructor(marca, modelo, ano, preco){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.#preco = preco;
    }

    exibirInformacoes(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Preço: ${this.#preco}`);
    }

    getPreco(){
        return this.#preco;
    }

    setPreco(preco){
        this.#preco = preco;
    }
}

module.exports = Veiculo;