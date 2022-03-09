// exercício 1
let fatorialDeDez = 1;

for (let index = 10; index >= 1; index -= 1) {
    fatorialDeDez = (fatorialDeDez*index);
    console.log (fatorialDeDez);
}

// exercícios 2
let word = 'Trybe';
let wordInvertida = '';

for (let index = 0; index <= word.length; index += 1) {
    wordInvertida = wordInvertida + (word [word.length - 1 - index])
    console.log (wordInvertida);
}

// exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorWord = array[0];
let menorWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (maiorWord.length < array[index].length) {
        maiorWord = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (menorWord.length > array[index].length) {
        menorWord = array[index];
    }
}

console.log (maiorWord);
console.log (menorWord);

// exercício 4

let maiorPrimo = 0;
let primos = [];

for (let index = 0; index <= 50; index += 1) {
    console.log ('Testando: ' + index)
    let primo = true;

    for (let index2 = 1; index2 < index; index2 += 1) {
        if (index % index2 === 0) {
            primo = false;
        }
    }

    if (primo === true){
        primos.push(index);
    }

    if (index > maiorPrimo) {
        maiorPrimo = index;
    }
}

console.log (primos);
console.log (maiorPrimo);
