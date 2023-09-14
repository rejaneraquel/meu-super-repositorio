const readline = require('readline-sync');

const pesoKg = 80;
const alturaCm = 178;

function handleIMC(peso, altura) {
    console.log(`Peso: ${peso} Kg, Altura: ${altura} cm`)
    
    const alturaMetros = altura / 100;
    const alturaQuadrado = alturaMetros ** 2;

    const bmi = peso/alturaQuadrado;

    return bmi
    
}

function main() {
    const bmi = handleIMC(pesoKg, alturaCm);
    
    console.log(`IMC: ${bmi.toFixed(2)}`)
}

main();
