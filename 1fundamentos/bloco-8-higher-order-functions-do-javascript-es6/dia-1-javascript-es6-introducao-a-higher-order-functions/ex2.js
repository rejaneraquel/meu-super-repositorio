/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Dia de sorte, você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(3, numberChecker));

//O retorno da função numberChecker é verdadeiro ? se sim retorne 'Lucky day, you won!' , se não : , retorne 'Try Again!' .