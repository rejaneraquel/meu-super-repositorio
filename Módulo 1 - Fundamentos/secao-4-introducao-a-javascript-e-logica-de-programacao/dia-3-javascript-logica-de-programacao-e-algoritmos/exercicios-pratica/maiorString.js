// 3 . Escreva dois algoritmos: Um que retorne a maioa palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
}
}
for (let i = 1; i < array.length; i += 1) {
    if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i];
}
}
console.log(maiorPalavra, menorPalavra);