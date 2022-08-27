let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1. Percorra o array imprimindo os valores nele contidos com a função console.log.
for (let i = 0; i < numbers.length; i += 1) {
 console.log(numbers[i]);
}

// 2. Some todos oa valores contidos no array e imrpima o resultado
let result = 0;
for (let i = 0; i < numbers.length; i += 1) {
result += numbers[i];
}
console.log(result);