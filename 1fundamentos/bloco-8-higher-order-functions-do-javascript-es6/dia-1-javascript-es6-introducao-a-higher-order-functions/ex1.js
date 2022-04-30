const newEmployees = (dadosEmployee) => {
    const employees = {
        id1: dadosEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: dadosEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: dadosEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const dadosEmployee = (nomeCompleto) => {
    let emailFormatado = `${nomeCompleto.replace('','_').toLowerCase()}@trybe.com`;
    return {
        nome: nomeCompleto,
        email: emailFormatado
    }
}
console.log(newEmployees(dadosEmployee));
//Resolução Live Lectures


/*  Resolução Gabarito
   const employeeGenerator = (fullName) => {
   const email = fullName.toLowerCase().split(' ').join('_');
   return { fullName, email: `${email}@trybe.com` };
 };
 
 const newEmployees = (callback) => {
   const employees = {
     id1: callback('Pedro Guerra'),
     id2: callback('Luiza Drumond'),
     id3: callback('Carla Paiva'),
   };
   return employees;
 };
 
 console.log(newEmployees(employeeGenerator)); */