//parte 1
const ondeEstou = document.getElementById('elementoOndeVoceEsta');

document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'blue';

const filhoDoElementoQueEstou = document.getElementById('elementoOndeVoceEsta').firstElementChild;
filhoDoElementoQueEstou.innerHTML = 'Texto do primeiro filho do filho';

document.getElementById('pai').firstElementChild;
ondeEstou.previousElementSibling;
ondeEstou.nextSibling;
ondeEstou.nextElementSibling;
document.getElementById('pai').lastElementChild.previousElementSibling;

//parte 2
//Crie um irmão para elementoOndeVoceEsta
const container = document.getElementById('pai');
let newArticle = document.createElement('article');
newArticle.id = 'filhoCinco';
container.appendChild(newArticle);

//Crie um filho para elementoOndeVoceEsta
const recipiente = document.getElementById('elementoOndeVoceEsta');
let newAside = document.createElement('aside');
newAside.id = 'asideFilhoDoFilho';
recipiente.appendChild(newAside);

//Crie um filho para primeiroFilhoDoFilho
const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let newDiv = document.createElement('div');
newDiv.id = 'DivNeta';
filhoDoFilho.appendChild(newDiv);

//A partir desse filho criado, acesse terceiroFilho 
const filhodefilho = document.getElementById('DivNeta').parentElement;
let ondeVoceEsta = filhodefilho.parentElement;
let terceiroFilho = ondeVoceEsta.nextElementSibling;

//parte 3
const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();