const fs = require('fs').promises;

async function createSimpsonsFamily() { 
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsFamily);
  simpsons.push({ id: '8', name: 'Nelson Muntz' })

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
  
  console.log(simpsons);
}
 
function main() {
  createSimpsonsFamily();
}

main();