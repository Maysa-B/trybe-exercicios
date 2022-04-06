const { sum, myRemove, myFizzBuzz, encode, decode } = require('./sum');

describe('Função sum', () => {
  test('4 mais 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 mais 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Exibe erro', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  test('Exibe erro: parameters must be numbers', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
})

describe('Função myRemove', () => {
  test('[1, 2, 3, 4] sem o número 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Array sem o número 3 não é igual ao próprio array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Se mandar tirar um número que não existe, continua tudo igual', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('Função myFizzBuzz', () => {
  test('15 retorna FizzBuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  test('9 retorna Fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });

  test('10 retorna Buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });

  test('13 retorna 13', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });

  test('inserir uma string retorna falso', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
})

describe('Função encode e decode', () => {
  test('Espera-se que a função encode e decode existam', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('inserir em encode: aeiou retorna 12345', () => {
    expect(encode('aeiou')).toMatch('12345');
  });

  test('inserir em decode: 12345 retorna aeiou', () => {
    expect(decode('12345')).toMatch('aeiou');
  });

  test('verifica se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('1234567890')).toMatch('aeiou67890');
    expect(encode('aeioulypnm')).toMatch('12345lypnm');
  });

  test('verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('aeiou')).toHaveLength(5);
    expect(decode('12345')).toHaveLength(5);
  })
})
