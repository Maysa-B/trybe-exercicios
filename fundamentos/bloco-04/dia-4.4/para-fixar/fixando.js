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

function adicao (a,b) {
   return (a + b);
}
function subtracao (a,b) {
    return (a - b);
}
function multiplicacao (a,b) {
    return (a * b);
}
function divisao (a,b) {
    return (a / b);
}
function modulo (a,b) {
    return (a % b);
}

console.log (adicao (10,5));
console.log (subtracao (10,5));
console.log (multiplicacao (10,5));
console.log (divisao (10,5));
console.log (modulo (10,5));

function maiorDeDois (a,b) {
    if (a > b) {
        return ('O maior número é: ' + a);
    } else {
        return ('O maior número é: ' + b);
    }
}

console.log (maiorDeDois (10, 5));

function maiorDeTres (a,b,c) {
    if (a > b && a > c) {
        return ('O maior número é: ' + a);
    } else if (c > b && c > a) {
        return ('O maior número é: ' + c);
    } else {
        return ('O maior número é: ' + b);
    }
}

console.log (maiorDeTres (15, 14, 18));

function npz (a) {
    if (a > 0) {
        return ('positive');
    } else if (a < 0) {
        return ('negative');
    } else {
        return ('zero');
    }
}

console.log (npz (-9));

function eUmTriangulo (a,b,c) {
    if (a + b + c == 180) {
        return ('true');
    } else if (a < 0 || b < 0 || c < 0) {
        return('Algum ângulo é inválido')
    } else {
        return (false);
    }
}

console.log (eUmTriangulo (45, 45, 90));