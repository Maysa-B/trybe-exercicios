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

module.exports = {sum, myRemove, myFizzBuzz, encode, decode};
