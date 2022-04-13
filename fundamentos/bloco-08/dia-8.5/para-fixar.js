const specialFruit = ['kiwi', 'morango', 'uva'];
const additionalItens = ['mamão', 'maçã', 'banana'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional, 'suco de limão', 'açucar'];
};

// console.log(fruitSalad(specialFruit, additionalItens));

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = {...user, ...jobInfos};

// const { name, age, nationality, profession, squad, squadInitials } = trappistEnterprise;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [palavra, funcao] = saudacoes;
// funcao(palavra);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const [ comidaC, animalC, bebidaC ] = [bebida, comida, animal];

// console.log(comidaC, animalC, bebidaC); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12].filter((id) => id % 2 === 0? id : 0);

// console.log(numerosPares); // [6, 8, 10, 12];

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
  return number*value;
};

console.log(multiply(8));