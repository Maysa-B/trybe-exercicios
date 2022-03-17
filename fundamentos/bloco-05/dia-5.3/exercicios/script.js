function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const pai = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const criando = document.createElement('li');
        let dia = dezDaysList[index];
        criando.innerHTML = dia;

        if (dia == 24 || dia == 31) {
            criando.className = 'holiday day';
            pai.appendChild(criando);
        } else if (dia == 25) {
            criando.className = 'holiday friday day';
            pai.appendChild(criando);
        } else if (dia == 4 || dia == 11 || dia == 18) {
            criando.className = 'friday day';
            pai.appendChild(criando);
        } else {
            criando.className = 'day';
            pai.appendChild(criando);
        }
    }
}

createDays();

function createButtonHoliday(feriados) {
    let container = document.getElementsByClassName('buttons-container')[0];
    let newButton = document.createElement('button');
    newButton.innerText = feriados;
    newButton.id = 'btn-holiday';

    container.appendChild(newButton);
}

createButtonHoliday('Feriados');

function changeColorHoliday() {
    let click = document.getElementById('btn-holiday');
    click.addEventListener('click', color);
    let holidays = document.getElementsByClassName('holiday');

    function color() {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor == 'pink') {
                holidays[i].style.backgroundColor = 'rgb(238,238,238)';
            } else {
                holidays[i].style.backgroundColor = 'pink';
            }
        }
    }
}

changeColorHoliday();

function createButtonFriday(sexta) {
    let container = document.getElementsByClassName('buttons-container')[0];
    let newButton = document.createElement('button');
    newButton.innerText = sexta;
    newButton.id = 'btn-friday';

    container.appendChild(newButton);
}

createButtonFriday('Sexta-feira');

function buttonSextou() {
    let click = document.getElementById('btn-friday');
    click.addEventListener('click', sextou);

    function sextou() {
        let sextas = document.getElementsByClassName('friday');
        let fridays = [4, 11, 18, 25];

        for (let i = 0; i < sextas.length; i += 1) {
            if (sextas[i].innerHTML !== 'SEXTOU') {
                sextas[i].innerHTML = 'SEXTOU';
            } else {
                sextas[i].innerHTML = fridays[i];
            }
        }

    }
}

buttonSextou();

function addAndRemoveZoom() {
    const zoom = document.getElementById('days')
    zoom.addEventListener('mouseover', add);
    zoom.addEventListener('mouseout', remove);

    function add(event) {
        event.target.style.fontSize = '30px';
    }

    function remove (event) {
        event.target.style.fontSize = '20px'
    }
}

addAndRemoveZoom();

function createTasks (nomeDaTarefa) {
    let container = document.getElementsByClassName('my-tasks')[0];
    let newSpan = document.createElement('span');
    newSpan.innerText = nomeDaTarefa;
    
    container.appendChild(newSpan);

}

createTasks ('estudar');

function addBackColor (cor) {
    let container = document.getElementsByClassName('my-tasks')[0];
    let newDiv = document.createElement('div');
    newDiv.className = 'task';
    newDiv.style.backgroundColor = cor;

    container.appendChild(newDiv);

}

addBackColor('yellow');

function addEventNaBola () {
    let botaoTask = document.querySelector('.task');
    botaoTask.addEventListener('click', mudaClass);

    function mudaClass () {
        if (botaoTask.className == 'task') {
            botaoTask.className = 'task selected';
        } else {
            botaoTask.className = 'task'
        }
    }

}

addEventNaBola();

function addEventInDay () {
    let botaoTask = document.getElementById('days');
    botaoTask.addEventListener('click', mudaColor);

    function mudaColor (event) {
        if (event.target.style.color == 'yellow') {
            event.target.style.color = 'rgb(119,119,119)';
        } else {
            event.target.style.color = 'yellow';
        }
    }

}

addEventInDay();

function addCompromisso () {
    let input = document.getElementById('task-input');
    let botao = document.getElementById('btn-add');

    input.addEventListener('keyup', function (event) {
        if (event.key == 'Enter') {
            newEvent();
        }
    });
    botao.addEventListener('click', newEvent);

    function newEvent () {
        let container = document.getElementsByClassName('task-list')[0];
        let newLi = document.createElement('li');

        if (input.value.length > 0) {
            newLi.innerText = input.value;
            container.appendChild(newLi);
        } else {
            alert ('Você precisa inserir algo!')
        }
    }

}

addCompromisso();
