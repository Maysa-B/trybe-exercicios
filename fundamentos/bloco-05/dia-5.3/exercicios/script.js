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
        console.log (dia)
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

function createButtonHoliday (feriados) {
    let container = document.getElementsByClassName('buttons-container')[0];
    let newButton = document.createElement('button');
    newButton.innerText = feriados;
    newButton.id = 'btn-holiday';

    container.appendChild(newButton);
}

createButtonHoliday('Feriados');