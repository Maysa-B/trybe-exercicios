function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(fraseSemCode) {
  let resultCode = '';

  for (let index in fraseSemCode) {
    if (fraseSemCode[index] === 'a') {
      resultCode += '1';
    } else if (fraseSemCode[index] === 'e') {
      resultCode += '2';
    } else if (fraseSemCode[index] === 'i') {
      resultCode += '3';
    } else if (fraseSemCode[index] === 'o') {
      resultCode += '4';
    } else if (fraseSemCode[index] === 'u') {
      resultCode += '5';
    } else {
      resultCode += fraseSemCode[index];
    }
  }

  return resultCode;
}

function decode(fraseComCode) {
  let resultSemCode = '';

  for (let index in fraseComCode) {
    if (fraseComCode[index] === '1') {
      resultSemCode += 'a';
    } else if (fraseComCode[index] === '2') {
      resultSemCode += 'e';
    } else if (fraseComCode[index] === '3') {
      resultSemCode += 'i';
    } else if (fraseComCode[index] === '4') {
      resultSemCode += 'o';
    } else if (fraseComCode[index] === '5') {
      resultSemCode += 'u';
    } else {
      resultSemCode += fraseComCode[index];
    }
  }

  return resultSemCode;
}

function techList(tech, name) {
  let newList = [];
  let ordenaTech = tech.sort();

  if (tech.length == 0) {
    return 'Vazio!';
  } else {
    for (let id = 0; id < tech.length; id += 1) {
      newList.push({tech: ordenaTech[id], name: name});
    }
  }

  return newList;
}

function hydrate(string) {
  let numbers = string.replace(/[^0-9]/g,'');
  let arrayCorreto = [];
  let arrayNumbers = [];
  let soma = 0;

  for (let id = 0; id < numbers.length; id += 1) {
    arrayCorreto.push (numbers[id]);
  }

  for (let id in arrayCorreto) {
   arrayNumbers.push(parseFloat(arrayCorreto[id]));
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    soma += arrayNumbers[index];
  }

  if (soma == 1) {
    return (soma + ' copo de água');
  } else if (soma == 0) {
    return ('nenhum copo de água');
  } else {
    return (soma + ' copos de água')
  }
  
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};
