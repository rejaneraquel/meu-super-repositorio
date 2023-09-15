const fs = require('fs').promises;
const path = require('path');

async function readSimpsonsData() { 
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../pratico-simpsons/simpsons.json'));
    const simpsons = JSON.parse(data);
    return simpsons;
 
  } catch (err) { 
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

async function main() { 
  const simpsons = await readSimpsonsData()
  console.log(simpsons);
}

main()

