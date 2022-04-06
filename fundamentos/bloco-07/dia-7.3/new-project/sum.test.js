const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./sum');

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

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});