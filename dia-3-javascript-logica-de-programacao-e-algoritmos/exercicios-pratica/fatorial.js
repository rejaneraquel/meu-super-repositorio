   /*
1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/

let nFatorial = 1
// Nesse caso o for vai ser decrescente e vai começar no index 10.

for (let i = 10; i > 0; i -= 1) {
    nFatorial *= i;
}
console.log(nFatorial)