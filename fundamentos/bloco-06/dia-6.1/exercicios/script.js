const buttonSubmit = document.querySelector('#submit');
buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
})
buttonSubmit.addEventListener('click', alertas);

function alertas() {
    const input1 = document.querySelector('#full-name').value;

    if (input1.length > 40 || input1.length < 10) {
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
    
}

// jeito mais dificil de fazer o 'clear' do form
// const buttonClear = document.querySelector('#clear');
// buttonClear.addEventListener('click', clearAll);

// function clearAll() {
//     const limpar = document.querySelectorAll('.input');

//     for (let index = 0; index < limpar.length; index += 1) {
//         if (limpar[index].className === "input button") {
//             limpar[index].checked = false;
//         } else {
//             limpar[index].value = '';
//         }
//     }
// }

const aceitaFotos = document.querySelector('#termo2');
aceitaFotos.addEventListener('click', inputImages);

function inputImages() {
    const pai = document.getElementById('final');

    if(aceitaFotos.checked === true) {
        const newInput = document.createElement('input');
        newInput.name = 'imagem';
        newInput.type = 'file';
        newInput.id = 'input-image';
        pai.appendChild(newInput);
    } else {
        document.getElementById('input-image').remove();
    }
}