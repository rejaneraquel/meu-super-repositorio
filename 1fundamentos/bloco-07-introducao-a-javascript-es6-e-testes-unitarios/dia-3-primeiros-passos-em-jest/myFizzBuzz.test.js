const { test, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');
//A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
describe('A função myFizzBuzz', () => {
    //Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    test('Espera-se que retorne fizzbuzz com o número 15', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    //Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    test('Espera-se que retorne fizz com o número 9', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })
    //Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    test('Espera-se que retorne buzz com o número 25', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    })
    //Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    test('Espera-se que retorne 2 com o número 2', () => {
        expect(myFizzBuzz(2)).toBe(2);
    })
    //Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
    test('Espera-se que retorne false com o número oi', () => {
        expect(myFizzBuzz('oi')).toBe(false);
    })
});