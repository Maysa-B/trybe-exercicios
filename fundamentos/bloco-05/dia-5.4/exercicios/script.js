//inicializando as informações
window.onload = function () { //quando a página carrega

    function iniciaBack (color){
        document.body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    function iniciaColor (color) {
        document.body.style.color = color;
        localStorage.setItem('color', color);
    }
    
    function fontSize (pixels) {
        document.body.style.fontSize = pixels;
        localStorage.setItem('fontSize', pixels);

    }

    function lineHeight (pixels) {
        document.body.style.lineHeight = pixels;
        localStorage.setItem('lineHeight', pixels);
    }

    function fontFamily (name) {
        document.body.style.fontFamily = name;
        localStorage.setItem('fontFamily', name);
}

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
const okBack = document.getElementById('ok-back');
const input1 = document.getElementById('corUm');
const okColor = document.getElementById('ok-color');
const input2 = document.getElementById('corDois');

//adicionar os eventListeners nos objetos de interação com o usuário
lessFont.addEventListener('click', tamanhoFont);
moreFont.addEventListener('click', tamanhoFont);
lessSpace.addEventListener('click', tamanhoSpace);
moreSpace.addEventListener('click', tamanhoSpace);
courier.addEventListener('click', mudaFont);
times.addEventListener('click', mudaFont);
okBack.addEventListener('click', changeBackground);
input1.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        changeBackground();
    }
})
okColor.addEventListener('click', changeColor);
input2.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        changeColor();
    }
})

//criar as funções que serão ativadas:
function tamanhoFont (event) {
    document.body.style.fontSize = fontSize;
    let number = parseFloat(fontSize);
    
    if (event.target == lessFont) {
        number -= 5;
    } else {
        number += 5;
    }

    document.body.style.fontSize = number + 'px';
    localStorage.setItem('fontSize', JSON.stringify(number) + 'px');
}

function tamanhoSpace (event) {
    const lineHeight = localStorage.getItem('lineHeight');
    let number = parseFloat(lineHeight);

    if (event.target == lessSpace) {
        number -= 5;
    } else {
        number += 5;
    }
    
    document.body.style.lineHeight = number + 'px';
    localStorage.setItem('lineHeight', JSON.stringify(number) + 'px');

}

function mudaFont (event) {
    if (event.target == courier) {
        document.body.style.fontFamily = 'Courier New'
        localStorage.setItem('fontFamily', 'Courier New');
    } else {
        document.body.style.fontFamily = 'Times New Roman';
        localStorage.setItem('fontFamily', 'Times New Roman')
    }
}

function changeBackground () {
    const input = document.getElementById('corUm');
    const cor = input.value;

    document.body.style.backgroundColor = cor;
    localStorage.setItem('backgroundColor', cor);
}

function changeColor () {
    const input = document.getElementById('corDois');
    const cor = input.value;

    document.body.style.color = cor;
    localStorage.setItem('color', cor);
}
