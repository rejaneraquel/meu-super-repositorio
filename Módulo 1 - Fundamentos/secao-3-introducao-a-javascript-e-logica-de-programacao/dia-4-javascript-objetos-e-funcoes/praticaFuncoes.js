function palindromo (param1) {
    for (index in param1) {
        if(param1[index] != param1[(param1.length - 1) - index]) {
            return false;
        }
    }
    return true;
}
console.log(palindromo('arara'));

// Utilizando os métodos split (transforma string em array), reverse (reverte) e join (array em string)

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false
