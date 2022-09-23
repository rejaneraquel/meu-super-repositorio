/*
9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/
const numberA = 2;
const numberB = 2;
const numberC = 2;

if ( numberA%2 != 0 || numberB%2 != 0 || numberC%2 != 0 ) {
    console.log(true)
} else {
    console.log(false)
}
/*
GABARITO

const a = 1;
const b = 3;
const c = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);
*/

