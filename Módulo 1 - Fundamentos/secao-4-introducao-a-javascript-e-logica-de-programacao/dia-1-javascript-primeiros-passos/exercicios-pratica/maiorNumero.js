// 1. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
 const a = 55;
 const b = 45;

 if (a < b) {
    console.log('maior número: ' + b )
 } else if (a > b) {
    console.log('maior número: ' + a)
 }

 // 2. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
 const c = 1100;
 const d = 1300;
 const e = 11110;

 if (c < d && e < d) {
    console.log('Maior número:' + d)
 } else if (d < e && c < e) {   
    console.log('Maior número:' +  e)
} else if (e < c && d < c) {
    console.log('Maior número:' + c)
};