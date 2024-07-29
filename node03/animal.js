class Animal{
    //metodo construtor
    constructor(especie, tamanho,cor, nome){
        //atributos
        this.especie = especie;
        this.tamanho = tamanho;
        this.cor = cor;
        this.nome = nome;
    }
    //metodos
    falar(){ console.log(`O anima ${this.nome} fez algum som`);}
    comer(){console.log(`O animal ${this.nome} comeu`);}
    dormir(){console.log(`O animal ${this.nome} dormiu`);}
}

const animal1 = new Animal('gato', 'gordo','laranja','Cleitinho')
console.log(animal1)

const animal2 = new Animal('cachorro', 'pequeno','branco','Belinha')
console.log(animal2.nome)