const readline = require('readline-sync');

const number = readline.questionInt('Say a number.');

const createFibonacciNumbers = (n) => {
  if (n <= 0) return console.log('O número deve ser maior que 0');

  let result = [1, 1];

  if (n === 1) {
    console.log('Sua sequência é: ', [...result[0]]);
    return [...result[0]];
  }
  if (n === 2) {
    console.log('Sua sequência é: ', result);
    return result;
  }

  for(let i = 3; i <= n; i += 1) {
    const oneBefore = result[i - 2];
    const twoBefore = result[i - 3]
    const nextNumber = oneBefore + twoBefore;
    result = [...result, nextNumber];
  }

  console.log('Sua sequência é: ', result);
  return result;
}

createFibonacciNumbers(number);