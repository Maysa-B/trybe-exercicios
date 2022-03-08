// atividade 1:
const myName = 'Maysa';

const birthCity = 'Meleiro';

let birthYear = 2003;
console.log (myName);
console.log (birthCity);
console.log (birthYear);

birthYear = 2030;
console.log (birthYear);

// birthCity = 'Paris';
// console.log (birthCity);

// atividade 2:
let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log (typeof (patientId));
console.log (typeof (isEnrolled));
console.log (typeof (patientInfo));
console.log (typeof (patientEmail));
console.log(typeof patientAge);

const base = 5;
let height = 8;

const area = base * height;
console.log (area);

const perimeter = (base * 2) + (height * 2);
console.log (perimeter);

// atividade 3:
const nota = 70;

if (nota >= 80) {
  console.log ('Parabéns você foi aprovada(o)!');
} else if (80 >= nota && nota>= 60) {
  console.log ('Você está na nossa lista de espera');
} else {
  console.log ('Você foi reprovada(o)');
}

// atividade 4:

//and
const currentHour = 18;
let message = '';

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
   message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour < 11 && currentHour > 4) {
  message = "Hmmm, cheiro de café recém passado";
}

console.log (message);

//or
let weekDay = 'quarta-feira';

if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
  console.log ('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
  console.log ('FINALMENTE, denscanso merecido UwU')
}

//atividade 5:
let estadoDoCandidato = 'lista';

switch (estadoDoCandidato) {
  case 'aprovada':
    console.log ('Parabéns você foi aprovada(o)!');
    break;

  case 'lista':
    console.log ('Você está na nossa lista de espera');
    break;

  case 'reprovada':
    console.log ('Você foi reprovada(o)');
    break;

  default: 
  console.log ('não se aplica');
  break;
}
