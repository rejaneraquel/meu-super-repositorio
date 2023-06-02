let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

// Acessar pelo indice
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

// Acessar conteudo ultimo index
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Adiciona mais uma tarefa no começo
tasksList.unshift('Academia');
console.log(tasksList);

// remove o ultimo item do array
tasksList.pop()
console.log(tasksList)

// remove o primeiro item da lista
tasksList.shift()
console.log(tasksList);