//parte 1
let testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }

}

testingScope(true);

let funcaoCrescente = () => {
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    //   oddsAndEvens[0] = 2;
    //   oddsAndEvens[1] = 3;
    //   oddsAndEvens[2] = 4;
    //   oddsAndEvens[3] = 7;
    //   oddsAndEvens[4] = 10;
    //   oddsAndEvens[5] = 13;

    oddsAndEvens.sort((a, b) => a - b);

    return (`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`)
}

console.log(funcaoCrescente());

let fatorial = number => {
    let result = number;

    if (number === 0) {
        result = 1;
    } else {
        for (let id = number - 1; id > 0; id -= 1) {
            result = result * id;
        }
    }

    return (result);
}

console.log(fatorial(0));

let biggestWord = (phrase) => {
    let palavraAtual = '';
    let maior = '';

    for (let id = 0; id < phrase.length; id += 1) {

        if (phrase[id] === ' ') {
            if (palavraAtual.length > maior.length) {
                maior = palavraAtual;
                palavraAtual = '';
            } else {
                palavraAtual = '';
            }
        } else if (id === phrase.length - 1) {
            palavraAtual += phrase[id];
            
            if (palavraAtual.length > maior.length) {
                maior = palavraAtual;
                palavraAtual = '';
            } else {
                palavraAtual = '';
            }
        } else {
            palavraAtual += phrase[id];
        }
    }

    return (maior);
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));