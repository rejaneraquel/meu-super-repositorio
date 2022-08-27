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

// 3. Calcule a média aritmética dos valores contidos no array
let media = result/numbers.length;
console.log(media);

// 4. Caso a média for maior que 20 imprima: "valor maior que 20", Caso não, imprima (valor menor ou igual a 20)
if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
};

// Utilizando o for, descubra qual o maior valor contida no array e imprima-o;
// Nesse caso como ja declaramos a variavel como o index[0], iremos inicar a conta do index[1];
// Vou redeclarar um novo array, para não confundir o array acima;
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let i = 1; i < numbers2.length; i +=1) {
    if (numbers2[i] > maiorNumero) {
        maiorNumero = numbers2[i]
}
}
console.log(maiorNumero)