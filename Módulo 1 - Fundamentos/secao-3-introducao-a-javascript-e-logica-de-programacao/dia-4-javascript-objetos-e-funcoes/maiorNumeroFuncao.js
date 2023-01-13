function maiorDeDois (a, b) {
    if (a > b) {
        return a + ' é maior que ' +b
    } else {
        return b + ' é maior que ' +a}
}
 console.log (maiorDeDois(151,121))

 function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
    if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
      return 'O maior número é: ' + primeiroNum;
    } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
      return 'O maior número é: ' + segundoNum;
    } else {
      return 'O maior número é: ' + terceiroNum;
    }
  }

  console.log (maiorDeTres(311, 506, 01))

