//1.Acesse o elemento elementoOndeVoceEsta .
const ondeVoceESta = document.getElementById('elementoOndeVoceEsta');
//2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = document.querySelector("#pai").parentNode.parentNode;
pai.style.color = 'red'
//3.Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "Estou aprendendo IHUUUUU! Eu te amo, Trybe!"
//4.Acesse o primeiroFilho a partir de pai .
            //document.querySelector('#pai').firstChild -> tentei assim, pq não deu certo?
const primeiroFilho = pai.firstElementChild
//5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
            //elementoOndeVoceEsta.previousSibling -> Pq não deu certo?
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling
//6.Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const textElement = elementoOndeVoceEsta.nextSibling;
//7.Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
            //confuso
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
//8.Agora acesse o terceiroFilho a partir de pai .
            //confuso
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

//createElement e appendChild
//1.Crie um irmão para elementoOndeVoceEsta .
let brother = "Clóvis"; 
let brotherHTML = document.querySelector('#pai');
let brotherCreate = document.createElement('section');
brotherCreate.innerText = brother;
brotherHTML.appendChild(brotherCreate);
//2.Crie um filho para elementoOndeVoceEsta .
let son = "Paulo";
let sonHTML = document.querySelector('#elementoOndeVoceEsta');
let sonCreate = document.createElement('section');
sonCreate.innerText = son;
sonHTML.appendChild(sonCreate);
//3.Crie um filho para primeiroFilhoDoFilho .
let neto = "Tiago";
let netoHTML = document.querySelector('#primeiroFilhoDoFilho');
let netoCreate = document.createElement('section');
netoCreate.innerText = neto;
netoHTML.appendChild(netoCreate);
//4.A partir desse filho criado, acesse terceiroFilho .
const filhoTerceiro = filhoPrimeiroFilhoDoFilho
     .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    console.log(terceiroFilho);
