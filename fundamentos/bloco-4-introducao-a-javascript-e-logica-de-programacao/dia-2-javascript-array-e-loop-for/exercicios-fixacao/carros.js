// Suponha que tenhamos uma lista de carros:
let cars = ['Saab', 'Volvo', 'BMW'];

// Sem o for utilizaríamos o seguinte código:
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

// Com o for, melhoramos o código:
for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
  }
