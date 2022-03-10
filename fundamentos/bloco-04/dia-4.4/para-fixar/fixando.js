let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

console.log ('A jogadora ' + player.name + ' ' + player.lastName + 'foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

console.log ('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let index in names) {
    console.log ('Olá ' + names[index]);
};

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index in car) {
    console.log (index, car[index]);
};

// exercícios do dia 4.1 refeitos em forma de função

function contas(a,b) {
    console.log(a + b); //adição
    console.log(a - b); //subtração
    console.log(a * b); //multiplicação
    console.log(a / b); //divisão
    console.log(a % b); //módulo
}

contas (10, 5);

function maiorDeDois (a,b) {
    if (a > b) {
        console.log('O maior número é: ' + a);
    } else {
        console.log('O maior número é: ' + b);
    }
}

maiorDeDois (10, 5);

function maiorDeTres (a,b,c) {
    if (a > b && a > c) {
        console.log('O maior número é: ' + a);
    } else if (c > b && c > a) {
        console.log('O maior número é: ' + c);
    } else {
        console.log('O maior número é: ' + b);
    }
}

maiorDeTres (15, 14, 18);

function npz (a) {
    if (a > 0) {
        console.log('positive');
    } else if (a < 0) {
        console.log('negative');
    } else {
        console.log('zero');
    }
}

npz (-9);

function eUmTriangulo (a,b,c) {
    if (a + b + c == 180) {
        console.log('true');
    } else {
        console.log(false);
    }
    
    if (a < 0 || b < 0 || c < 0) {
        console.log('Algum ângulo é inválido')
    }
}

eUmTriangulo (45, 45, 90);