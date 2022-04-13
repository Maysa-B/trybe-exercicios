const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (carro) => {
    const [ nome, marca, ano ] = carro;
    return {nome, marca, ano,};
} 

console.log(toObject(palio));

// outra forma:
// const toObject = ([name, brand, year]) => ({ name, brand, year });
// posso ler diretamente nos PARÂMETROS cada ELEMENTO com ARRAY DESTRUCTURING