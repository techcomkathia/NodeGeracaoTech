class Produto{
    #preco
    constructor(nome, preco, dataValidade){
        this.nome = nome;
        this.#preco = preco;
        this.dataValidade = dataValidade;
    }

    exibirInformacoes(){
        console.log(`Nome: ${this.nome}, Preço: ${this.#preco()}, Data de Validade: ${this.dataValidade}`);
    }

    getPreco(){
        return this.#preco;
    }

    setPreco(preco){
        this.#preco = preco;
    }
}

class Alimentos extends Produto{
    constructor(nome, preco, dataValidade, peso, ehPerecivel){
        super(nome, preco, dataValidade);
        this.peso = peso;
        this.ehPerecivel = ehPerecivel;
    }

    exibirInformacoes(){
        console.log(`Nome: ${this.nome}, Preço: ${this.getPreco()}, Data de Validade: ${this.dataValidade}, Peso: ${this.peso}, Perecível: ${this.ehPerecivel}`);
    }
}

class Bebida extends Produto{
    constructor(nome, preco, dataValidade, volume, ehAlcoolica){
        super(nome, preco, dataValidade);
        this.volume = volume;
        this.ehAlcoolica = ehAlcoolica;
    }

    exibirInformacoes(){
        super.exibirInformacoes();
        console.log(` Volume: ${this.volume}, Alcoólica: ${this.ehAlcoolica}`);
    }
}


class Estoque{
    constructor(){
        this.produtos = [];
    }

    adicionarProduto(produto){
        this.produtos.push(produto);
    }

    exibirProdutos(){
        this.produtos.forEach(produto => produto.exibirInformacoes());
    }

    removerProduto(produto){
        this.produtos = this.produtos.filter(p => p !== produto.nome);
    }
}