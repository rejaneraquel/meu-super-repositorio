const readline = require('readline-sync');

// Função base para calcular o IMC
function handleIMC(peso, altura) {
    console.log(`Peso: ${peso} Kg, Altura: ${altura} cm`)
    
    const alturaMetros = altura / 100;
    const alturaQuadrado = alturaMetros ** 2;
    
    const bmi = peso/alturaQuadrado;
    
    return bmi
    
}

// Objeto que define o intervalo de peso de cada categoria
const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

//Função que calcula em qual categoria o peso se enquadra
function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // Recebe as Chaves do objeto.

  const resultFind = statuses.find((status) => { //o find irá buscar o primeiro status que satisfaça a condição listada abaixo
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada. Assim que retornar true la para e dá o resultado.
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}



//Função que insere as informaçoẽs do usuário
function main() {
    const peso = readline.questionFloat(`Qual seu peso(kg)? `);
    const altura = readline.questionInt(`Qual sua altura (cm)? `);
    const bmi = handleIMC(peso, altura);

    // Executa handleBMIResult
    const bmiResult = handleBMIResult(bmi);
    
    console.log(`IMC: ${bmi.toFixed(2)}`)
    console.log(bmiResult);
}

main();
