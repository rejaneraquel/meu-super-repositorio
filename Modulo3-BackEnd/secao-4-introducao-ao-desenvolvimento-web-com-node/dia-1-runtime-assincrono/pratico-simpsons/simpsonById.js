const fs = require('fs').promises;

async function simpsonById(id) {
  
  const data = await fs.readFile('../pratico-simpsons/simpsons.json')
  const simpsons = JSON.parse(data)
  // console.log(simpsonsById)
   
  const chosenSipson = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!chosenSipson) {

    throw new Error('id não encontrado')
  
  } return chosenSipson
}

// Chamando a maina para receber o retorno assíncrono da função acima
async function main() { 
  const simpson = await simpsonById(1)
  console.log(simpson)
}

main()