// parte 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let infoDois = {
    personagem: 'Tio Patinha',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

console.log ('Bem-vinda, ' + info.personagem);
console.log (info);

for (let index in info) {
    console.log (index);
}

for (let index in info && infoDois) {
    if (index === 'recorrente' && info[index] === 'Sim' && infoDois[index] === 'Sim') {
        console.log ('Ambos recorrentes');
    } else {
        console.log (info[index] + ' e ' + infoDois[index]); 
    }
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log ('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

  console.log (leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

// parte 2
function palindromo (palavra) {
    let before = [];
     let after = [];

    for (let id in palavra){
        before.push (palavra[id]);
        after.push (palavra[id]);
    }
   
    after = after.reverse();

    if (before === after) {
        return true;
    } else {
        return false;
    }
}

console.log (palindromo('abelha'));

function indexBiggestNumber (number) {
    let biggestNumber = number[0];
    let index = 0;

    for (let id in number) {
        if (number[id] > biggestNumber) {
            biggestNumber = number[id];
            index = (id);
        }
    }

    return index;
}

console.log (indexBiggestNumber([2, 3, 6, 7, 10, 1])); 

function indexLowestNumber (number) {
    let lowestNumber = number[0];
    let index = 0;

    for (let id in number) {
        if (lowestNumber > number[id]) {
            lowestNumber = number [id];
            index = (id);
        }
    }

    return index;
}

console.log (indexLowestNumber([2, 4, 6, 7, 10, 0, -3])); 

function biggestName (names) {
    let biggestName = '';

    for (let id in names) {
        if (names[id].length > biggestName.length) {
            biggestName = names[id];
        }
    }

    return biggestName;
}

console.log (biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function numberMaisRepetido (numbers) {
    let repeticoesDoMaior = 0;
    let numberMaisRepetido;

    for (let id in numbers) {
         let repeticoes = 0;
         let numeroTestando = numbers [id];
        for (let id2 in numbers) {
           if (numeroTestando = numbers[id2]) {
                repeticoes += 1;

                if (repeticoes > repeticoesDoMaior) {
                    repeticoesDoMaior = repeticoes;
                    numberMaisRepetido = numbers[id];
                   }
            }
        }
    }

    return numberMaisRepetido;
}

console.log (numberMaisRepetido([2, 3, 2, 5, 8, 2, 3]));

function somaTodos (n) {
    let soma = 0;
    for (let index = 1; index <= n; index += 1) {
        soma += index;
    }

    return soma;
}

console.log (somaTodos(5));

function checkFinal (word,ending) {
    let endingArray = [];
    let wordArray = [];
    let resultado;

    for (let id in ending) {
        endingArray.push (ending[id]);
    }

    for (let id in word) {
        wordArray.push (word[id]);
    }

    wordArray = wordArray.reverse ();
    endingArray = endingArray.reverse ();

    for (let index = 0; index < endingArray.length; index += 1) {
        if (endingArray[index] !== wordArray[index]) {
            resultado = false;
            break;
        } else {
            resultado = true;
        }
    }
    
    return resultado;
}

console.log (checkFinal('trybe','be'));
