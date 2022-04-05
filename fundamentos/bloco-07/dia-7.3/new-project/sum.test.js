const sum = require('./sum');

describe('Função sum', () => {

  test('4 mais 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 mais 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Exibe erro', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })

  test('Exibe erro: parameters must be numbers', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  })
}) 
