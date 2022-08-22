
// 1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';

const statusProcesso = 'lista';

// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.
switch(statusProcesso) {
    case 'aprovada' :
        console.log('Parabéns, você foi aprovada')
        break;
        case 'lista':
            console.log('Você esta na nossa lista de espera')
            break;
            case 'reprovada':
                console.log('Você foi reprovado')
                break;
                default:
                    console.log('Informação Incorreta');
                    break;
                }