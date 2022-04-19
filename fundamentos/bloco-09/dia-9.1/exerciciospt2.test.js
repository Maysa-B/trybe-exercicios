const { test, expect } = require('@jest/globals');
const exp = require('constants');
const { describe } = require('yargs');
const { uppercase, getPokemonDetails } = require('./exerciciospt2');

test('Exercício 7 - Verifica se todas as letras são transformadas em maiúscula', (done) => {
  uppercase('minha palavra', (string) => {
    try {
      expect(string).toBe('MINHA PALAVRA');
      done();
    } catch (erro) {
      done(erro);
    }
  })
});