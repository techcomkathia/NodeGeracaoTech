const Veiculo = require('./Veiculo');
const Moto = require('./Moto');
const Carro = require('./Carro');

const moto1 = new Moto('Honda', 'CB 500', 2021, 30000, 500, 'Elétrica');
const carro1 = new Carro('Fiat', 'Uno', 2021, 51000, 4, 'Flex');
const carro2 = new Carro('Fiat', 'MAreia', 1990, 20000, 2, 'Gasolina');

moto1.exibirInformacoes();
carro1.exibirInformacoes();
carro2.exibirInformacoes();