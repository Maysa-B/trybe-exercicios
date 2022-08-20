const readline = require('readline-sync');

const wgt = readline.questionFloat('What\'s your weight?');
const hgt = readline.questionFloat('What\'s your height?');

const findCategory = (BMI) => {
  let category = '';
  if (BMI < 18.5) category = 'Abaixo do peso (magreza)';
  if (BMI > 18.5 && BMI <= 24.9) category = 'Peso normal';
  if (BMI > 24.9 && BMI <= 29.9) category = 'Acima do peso (sobrepeso)';
  if (BMI > 29.9 && BMI <= 34.9) category = 'Obesidade grau I';
  if (BMI > 34.9 && BMI <= 39.9) category = 'Obesidade grau II';
  if (BMI >= 40) category = 'Obesidade grau III e IV';

  console.log(`Your category is: ${category}`);
  return category;
}

const calculateBmi = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const BMIFinal = (weight/height ** 2).toFixed(2);
  console.log(`BMI: ${BMIFinal}`);
  findCategory(BMIFinal);
  return BMIFinal;
};

calculateBmi(wgt, hgt);
