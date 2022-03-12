/*
Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina). 
*/
const myName = "Rejane Raquel";
/*
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
*/
const birthCity = "Brasília";
/*
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
*/
var birthYear = 1987;
/*
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
*/
console.log(myName, birthCity, birthYear);
/*
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
*/
var birthYear = 2030;
console.log(birthYear);
/*
 Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?
 */
const birthCity = "Natal"; //o novo valor não será atribuído pois trata-se de uma constante!

/* 
Exercícios: tipos primitivos, tipagem dinânima e Op Aritméticas
*/
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

/* 
Checando tipo da variável patientAge
*/
console.log(typeof patientAge); //resultado undefined pois não tem esta variável declarada;
/* 
Experimente também trocar o valor de patientId = 50 para patientId = '50' . Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação
 */
let patientId = "50";
console.log(typeof patientId);
/*
Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8. 
*/
const base = 5;
const height = 8;
/*
Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
*/
const area = base*height;
console.log(area);
/*
Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo. 
*/
let lado1 = 5;
let lado2 = 3;
let lado3 = 4;
const perimeter = lado1+lado2+lado3; 
console.log(perimeter)
//Condições If e Else
/*
Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100; 
*/
const nota = 92;
/* 
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"
*/
if (nota >= 80) {
console.log("Parabéns, você foi aprovada(o)!")
} else if (nota >= 60) {
  console.log("Você está na nossa lista de espera")
} else {
  console.log("Você foi reprovada(o)")
}; // verificar se está correto!
