let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  /* Usando o objeto acima, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
  */
 for (let key in car) {
    console.log(key, car[key])
 }