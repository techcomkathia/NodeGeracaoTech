class Animal{
    //declarar campos privados
    #nome
    #especie

    //metodo construtor
    constructor(especie, tamanho,cor, nome){
        
        //atributos
        this.#especie = especie;
        this.tamanho = tamanho;
        this.cor = cor;
        this.#nome = nome;
    }
    //metodos
    falar(){ console.log(`O anima ${this.#nome} fez algum som`);}
    comer(){console.log(`O animal ${this.#nome} comeu`);}
    dormir(){console.log(`O animal ${this.#nome} dormiu`);}

    getNome() {return this.#nome;}
    setNome(nome) {this.#nome = nome;}
}

const animal1 = new Animal('gato', 'gordo','laranja','Cleitinho')
console.log(animal1)
animal1.cor= 'laranja e branco'
console.log(animal1)
console.log(animal1.getNome())
animal1.setNome('Cleiton')
console.log(animal1.getNome())

const animal2 = new Animal('cachorro', 'pequeno','branco','Belinha')


module.exports = Animal;
