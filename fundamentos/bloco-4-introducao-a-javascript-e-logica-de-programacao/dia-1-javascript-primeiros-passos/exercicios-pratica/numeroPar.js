/*
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

const numberA = 1;
const numberB = 3;
const numberC = 3;

if ( numberA%2 == 0 || numberB%2 == 0 || numberC%2 == 0 ) {
    console.log(true)
} else {
    console.log(false)
}

/*
GABARITO TRYBE

const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

*/