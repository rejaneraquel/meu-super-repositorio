/*
🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/
const a = 100;
const b = 20;
const c = 60;
const soma = a+b+c;

if (soma > 180 && soma > 0) {
    console.log (false)
} else if (soma === 180) {  
    console.log(true)
} else if  (soma < 180 && soma > 0) {
    console.log (false) 
} else {
    console.log('Erro: ângulo inválido')
};

/*
GABARITO

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
*/
