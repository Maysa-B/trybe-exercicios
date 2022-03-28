
let picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: "DD.MM.YYYY",
    minDate: new Date(2022, 05, 01),
});

// picker.setMinDate(01-05-2022);

const validate = new window.JustValidate('#form');

validate.addField('#full-name', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

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

const aceitaFotos = document.querySelector('#termo2');
aceitaFotos.addEventListener('click', inputImages);

function inputImages() {
    const pai = document.getElementById('botoes-finais');

    if(aceitaFotos.checked === true) {
        const newInput = document.createElement('input');
        newInput.name = 'imagem';
        newInput.type = 'file';
        newInput.className = 'form-control'
        newInput.id = 'input-image';
        pai.appendChild(newInput);
    } else {
        document.getElementById('input-image').remove();
    }
}

// const radio = document.querySelectorAll('.btn-check');

// for (let id = 0; id < radio.length; id += 1) {
//     radio[id].addEventListener('click', check);
// }

// function check() {

//     for (let id = 0; id < radio.length; id += 1) {

//         if (radio[id].checked === true) {
//             console.log('oi')
//             radio[id].style.border = '3px solid purple';
//         } else {
//             console.log('bye')
//             radio[id].style.backgroundColor = '';
//         }
        
//     }
// }