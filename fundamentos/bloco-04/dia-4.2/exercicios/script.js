let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNumero = 0;
let menorNumero = numbers[0];
let numbersOdd = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log (numbers[index]); //1
    soma += numbers[index]; //2
    if (numbers[index] > maiorNumero) { //5
        maiorNumero = numbers[index];
    }

    if (numbers[index] % 2 !== 0) { //6
        numbersOdd += 1;
    } else {
        console.log ('nenhum valor ímpar encontrado');
    }

    if (numbers[index] < menorNumero) { //7
        menorNumero = numbers[index];
    }
}

console.log ('O menor número é: ' + menorNumero);
console.log ('O maior número é: ' + maiorNumero);
console.log ('Há ' + numbersOdd + ' números ímpares')

let mediaAritmetica = soma / numbers.length; //3
console.log (soma);
console.log (mediaAritmetica);

if (mediaAritmetica <= 20) { //4
    console.log('valor menor ou igual a 20');
} else {
    console.log ('valor maior que 20');
}

let numeros = []; //8

for (let index = 1; index <= 25; index += 1) {
    numeros.push (index);
}

console.log (numeros);

for (let index = 0; index < numeros.length; index += 1) { //9
    console.log (numeros[index]/2);
}
