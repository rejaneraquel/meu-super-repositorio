/* 
6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

peca = 'rei';
let movimento = 'erro - peça inválida';

switch (peca) {
  case 'peao':
  case 'bispo':
    movimento = 'diagonal'
    break
  case 'cavalo':
    movimento = 'em L'
    break
  case 'torre':
    movimento = 'horizontal ou vertical'
    break
  case 'dama':
  case 'rei':
    movimento = 'qualquer direção'
    break;
    ;
}

console.log(movimento); // 'Outono'
