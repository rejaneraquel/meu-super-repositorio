const fs = require('fs').promises;

async function createSimpsonsFamily() { 
  const simpsonsFamily = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFamily);
  const familySimpsonsArray = simpsons.filter((simpson) => simpson.id >= 1 && simpson.id <= 4);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(familySimpsonsArray));
  
  // console.log(familySimpsonsArray);
}
 
function main() {
  createSimpsonsFamily()
}

main();