
//import da classe animal

const Animal = require('./animal')

class AnimaisVoadores extends Animal{
    constructor(especie, tamanho, cor, nome, qtdAsas){
        super(especie, tamanho, cor, nome)
        this.qtdAsas = qtdAsas
    }

    voar(){
        console.log(`O animal ${this.getNome()} voou`)
    }
       
}

// class AnimaisNadadores extends Animal{
//     constructor(especie, tamanho, cor, nome){
//         super(especie, tamanho, cor, nome)
//     }

//     nadar(){
//         console.log(`O animal ${this.getNome()} nadou`)
//     }
// }

class AnimalVoadoresAndandadores extends AnimaisVoadores{
    constructor(especie, tamanho, cor, nome, qtdAsas){
        super(especie, tamanho, cor, nome, qtdAsas)
    }

    andar(){
        console.log(`O animal ${this.getNome()} andou`)
    }
}

class VoaNadaAnda extends AnimalVoadoresAndandadores{
    constructor(especie, tamanho, cor, nome, qtdAsas){
        super(especie, tamanho, cor, nome, qtdAsas)
    }

    nadar(){
        console.log(`O animal ${this.getNome()} nadou`)
    }
}

const animal1 = new VoaNadaAnda('pato', 'pequeno', 'preto', 'Patolino', 2)
console.log(animal1)
animal1.voar()
animal1.nadar()
animal1.andar()
animal1.falar()
animal1.comer()
const animal2 = new AnimaisVoadores('borboleta', 'pequeno', 'laranja', 'Poti Poti', 4)
animal2.voar()
animal2.falar()
console.log(animal2)
const animal3 = new AnimalVoadoresAndandadores('pombo', 'pequeno', 'cinza', 'Osvaldo', 2)
console.log(animal3)
animal3.voar()
animal3.andar()
animal3.falar()
animal3.comer()
