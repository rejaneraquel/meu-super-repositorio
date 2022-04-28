//Função 1
const { test, describe } = require('@jest/globals');
const sum = require('./sum');
describe(`A função sum`, () => {
    //Teste se o retorno de sum(4, 5) é 9
    test(`Testa se 4 + 5 é igual a 9`, () => {
        expect(sum(4, 5)).toBe(9);
    });
    //Teste se o retorno de sum(0, 0) é 0
    test(`Testa se 0 + 0 é igual a 0`, () => {
        expect(sum(0, 0)).toBe(0);
    });
    //Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
    test(`Espera-se um erro quando um dos parametros for uma string`, () => {
        expect(() => { sum(4,'5') }).toThrow('parameters must be numbers');
    });
    //Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
    test(`Espera-se um erro quando os parametros não forem numbers`, () => {
        expect(() => { sum('') }).toThrow('parameters must be numbers');
    });

});
//Gabarito
/* sum.test.js
const sum = require('./sum.js');

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})
*/