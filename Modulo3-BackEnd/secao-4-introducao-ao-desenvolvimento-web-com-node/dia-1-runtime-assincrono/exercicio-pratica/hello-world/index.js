const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
const lastName = readline.question('Qual seu sobrenome? ')

console.log(`Hello, ${name} ${lastName}! You are ${age} years old!`);