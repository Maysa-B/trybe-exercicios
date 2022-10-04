type EstadosFisicos = 'sólido' | 'líquido' | 'gasoso';
type CPF = string | number;
type sisOp = 'linux' | 'mac' | 'windows';
type vogais = 'a' | 'e' | 'i' | 'o' | 'u';

const agua: EstadosFisicos = 'gasoso';
const meuCpf: CPF = '123456789';
const meuPc: sisOp = 'linux';
const vogalMeuNome: vogais = 'a';

class Dog {
  _name: string;
  _sex: string;
  _raca: string;

  constructor(name:string, sex:string, raca:string) {
    this._name = name,
    this._sex = sex,
    this._raca = raca
  }

  late(): string {
    return `${this._name} latiu: au, au, au`;
  }

  abana(): string {
    return `${this._name} está abanando o rabo`;
  }
}

const jade = new Dog('Jade', 'fem', 'vira-lata');
console.log(jade.late());
const nina = new Dog('Nina', 'fem', 'salcicha');
console.log(nina.abana());

interface Automovel {
  marca: string,
  ano: number,
  valor: number,
  modelo: string,
}

const prisma: Automovel = {
  marca: 'Chevrolet',
  ano: 2014,
  valor: 30000,
  modelo: 'prisma'
}

interface Buyer extends Automovel {
  nome: string,
  age?: number
}

const sabrinaCar: Buyer = {
  ...prisma,
  nome: 'Sabrina',
  age: 31
}

const martinhoCar: Buyer = {
  marca: 'Chevrolet',
  ano: 2018,
  valor: 40000,
  modelo: 'prisma',
  nome: 'Martinho'
}

console.log(sabrinaCar);
console.log(martinhoCar);