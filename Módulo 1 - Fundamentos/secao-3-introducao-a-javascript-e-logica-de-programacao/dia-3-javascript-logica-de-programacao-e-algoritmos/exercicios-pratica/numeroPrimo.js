// 4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
// criando a variável 
let biggestPrimeNumber = 0;

// criando o for que inicia no 2 e termina no 50;
for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  // criando o for que define o divisor
  /*
  escolhendo um numero para entender a lógica:
  currentNumber = 7
  se o currentDivisor < 7 ; add mais 1;
   o restante da logica eu não entendi
  */
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);