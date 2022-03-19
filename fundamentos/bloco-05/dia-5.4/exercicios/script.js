//guardando informações
window.onload = function () {
localStorage.setItem('backgroundColor', 'antiquewhite');
localStorage.setItem('color', 'black');
tamanhoFont();
localStorage.setItem('lineHeight', '18px');
localStorage.setItem('fontFamily', 'Courier New');
}

//adicionar uma variável para cada um
const backgroundcolor = localStorage.getItem('backgroundColor');
const color = localStorage.getItem('color');
const fontSize = localStorage.getItem('fontSize');
const lineHeight = localStorage.getItem('lineHeight');
const fontFamily = localStorage.getItem('fontFamily');


//locais acessando as informações:
document.body.style.backgroundColor = backgroundcolor;
document.body.style.color = color;
document.body.style.fontSize = fontSize;
document.body.style.lineHeight = lineHeight;
document.body.style.fontFamily = fontFamily;

//constantes para as entradas
const lessFont = document.getElementById('less-font');
const moreFont = document.getElementById('more-font');
const lessSpace = document.getElementById('less-space');
const moreSpace = document.getElementById('more-space');
const courier = document.getElementById('courier');
const times = document.getElementById('times');
const gill = document.getElementById('gill');
const okBack = document.getElementById('ok-back');
const okColor = document.getElementById('ok-color')


//adicionar os eventListeners nos objetos de interação com o usuário
lessFont.addEventListener('click', tamanhoFont);
moreFont.addEventListener('click', tamanhoFont);
lessSpace.addEventListener('click', tamanhoSpace);
moreSpace.addEventListener('click', tamanhoSpace);
courier.addEventListener('click', mudaFont);
times.addEventListener('click', mudaFont);
gill.addEventListener('click', mudaFont);
okBack.addEventListener('click', changeBackground);
okColor.addEventListener('click', changeColor);

//criar as funções que serão ativadas:
function tamanhoFont (event) {
    let number = parseFloat(fontSize);
    
    if (event.target == lessFont) {
        number -= 5;
    } else if (event.target == moreFont) {
        number += 5;
    } else {
        number = 15;
    }
    
    localStorage.setItem('fontSize', JSON.stringify(number) + 'px');
}

function tamanhoSpace (event) {
    let number = parseFloat(lineHeight);

    if (event.target == lessSpace) {
        number -= 5;
    } else {
        number += 5;
    }
    
    localStorage.setItem('lineHeight', JSON.stringify(number) + 'px');

}

function mudaFont (event) {
    if (event.target == courier) {
        localStorage.setItem('fontFamily', 'Courier New');
    } else if (event.target == times) {
        localStorage.setItem('fontFamily', 'Times New Roman');
    } else {
        localStorage.setItem('fontFamily', 'Gill Sans');
    }
}

function changeBackground () {
    const input = document.getElementById('corUm');
    const cor = input.value;
    localStorage.setItem('backgroundColor', cor);
}

function changeColor () {
    const input = document.getElementById('corDois');
    const cor = input.value;
    localStorage.setItem('color', cor);
}
