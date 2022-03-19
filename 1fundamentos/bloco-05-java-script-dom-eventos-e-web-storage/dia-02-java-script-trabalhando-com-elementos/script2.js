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