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
let media = result / numbers.length;
console.log(media);

// 4. Caso a média for maior que 20 imprima: "valor maior que 20", Caso não, imprima (valor menor ou igual a 20)
if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
};

// 5. Utilizando o for, descubra qual o maior valor contida no array e imprima-o;
// Nesse caso como ja declaramos a variavel como o index[0], iremos inicar a conta do index[1];
// Vou redeclarar um novo array, para não confundir o array acima;
//let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i]
    }
}
console.log(maiorNumero)

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista imprima "Nenhum valor impar encontrado"
let numerosImpares = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        numerosImpares += 1
    }
} if (numerosImpares === 0) {
    console.log('nenhum valor ímpar encontrado')
}
 else { console.log(numerosImpares) }  

// 7. utilizand o for, descubra qual o menor valor contido no array e imprima-o 
let menorNumero = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i]
    }
}
console.log(menorNumero)

// Utilizando o for crie um array que vai até 25 e imprima o resultado

let numeros3 = [];
for (let i = 0; i < 25; i += 1) {
numeros3[i] = numeros3.push([i])
}
console.log(numeros3)

/*
GABARITO 8
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);
*/