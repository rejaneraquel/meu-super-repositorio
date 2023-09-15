const fs = require('fs').promises;
const path = require('path');

async function readSimpsonsData() { 
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../pratico-simpsons/simpsons.json'));
    const simpsons = JSON.parse(data);
    // Mapeando cada objeto do array para uma string no formato correto
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)
    
    // Exibindo as strings na tela
    strings.forEach((string) => console.log(string));

  } catch (err) { 
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

async function main() { 
  const simpsons = await readSimpsonsData()
  
}

main()

