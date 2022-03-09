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
