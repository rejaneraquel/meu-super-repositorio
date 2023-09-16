const fs = require('fs').promises;

async function createSimpsonsFamily() { 
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFamily);
  
  const newArray = simpsons.filter((simpson) => simpson.id !== '8');
  newArray.push({id: '15', name: 'Maggie'})

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
  
}
 
function main() {
  createSimpsonsFamily();
}

main();

// No gabarito: 
// Criamos um novo Array contendo a personagem Maggie
      // const simpsonsWithMaggie = simpsonsWithoutNelson
      //   .concat([{ id: '15', name: 'Maggie Simpson' }]);
// com spread seria assim:
     // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

// Escrevemos o novo array no arquivo e retornamos a promise de escrita
     // return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
//}