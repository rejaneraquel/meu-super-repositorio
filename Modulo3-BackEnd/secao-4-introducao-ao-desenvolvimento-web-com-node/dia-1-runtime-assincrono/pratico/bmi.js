const readline = require('readline-sync');


function handleIMC(peso, altura) {
    console.log(`Peso: ${peso} Kg, Altura: ${altura} cm`)
    
    const alturaMetros = altura / 100;
    const alturaQuadrado = alturaMetros ** 2;
    
    const bmi = peso/alturaQuadrado;
    
    return bmi
    
}

function main() {
    const peso = readline.questionInt(`Qual seu peso(kg)? `);
    const altura = readline.questionInt(`Qual sua altura (cm)? `);
    const bmi = handleIMC(peso, altura);
    
    console.log(`IMC: ${bmi.toFixed(2)}`)
}

main();
