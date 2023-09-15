const fs = require('fs').promises;
const path = require('path');

async function simpsonsRemove() { 
    const readFile = await fs.readFile(path.resolve(__dirname, '../pratico-simpsons/simpsons.json'));
    const simpsons = JSON.parse(readFile);
    
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  
  await fs.writeFile(path.resolve(__dirname, '../pratico-simpsons/simpsons.json'), JSON.stringify(newArray));
    

};
 
// Apenas para ter um ponto de entrada centralizado para o nosso script
async function main() { 
const simpsons = await simpsonsRemove()
  
}

main()


