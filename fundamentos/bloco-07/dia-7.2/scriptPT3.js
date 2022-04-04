const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addKeyValue = (obj, key, value) => obj[key] = value;
addKeyValue(lesson2, 'turno', 'noite');
console.table(lesson2);

const returnKeys = (obj) => Object.keys(obj);
console.table(returnKeys(lesson1));

const returnValues = (obj) => Object.values(obj);
console.table(returnValues(lesson1));

const returnTamanho = (obj) => Object.keys(obj).length;
console.log(returnTamanho(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalOfStudents = (obj) => {
    const turma1 = parseInt(obj.lesson1.numeroEstudantes);
    const turma2 = parseInt(obj.lesson2.numeroEstudantes);
    const turma3 = parseInt(obj.lesson3.numeroEstudantes);

    return turma1+turma2+turma3;
}
console.log(totalOfStudents(allLessons));

const getValueByNumber = (obj, number) => {
    const values = Object.values(obj);

    return values[number];
}
console.log(getValueByNumber(lesson1, 0));


const contains = (obj, key, value) => {
     if (obj[key] === value) {
        return true;
    } else {
        return false;
    }
}
console.log(contains(lesson3, 'turno', 'noite'));