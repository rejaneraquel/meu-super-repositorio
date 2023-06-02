let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log ('Boas Vindas, '+info.personagem)

//infor.recorrente = 'sim', tb daria certo
  info['recorrente'] = 'sim',
 console.log(info)

 for ( key in info){
    console.log(key)
 }

 for ( key in info){
    console.log(info[key])
 }
 let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Montain',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };
  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'sim' &&
      info2[properties] === 'sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }