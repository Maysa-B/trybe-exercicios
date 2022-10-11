// exercício 1
class Person {
  constructor(
    private _name: string,
    private _birthDate: Date
  ) {
    this.name = _name;
    this.birthDate = _birthDate;
  };

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length >= 3) {
      this._name = name;
    } else {
      throw new Error('O nome deve possuir no mínimo 3 caracteres');
    }
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(bdate: Date) {
    // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const diff = Math.abs(new Date().getTime() - bdate.getTime());
    // 1 ano = 31536000000 milissegundos
    const age = Math.floor(diff / 31536000000);
    const isFuture = bdate.getTime() > new Date().getTime();

    if (isFuture || age > 120) {
      throw new Error('A data não pode ser futura e você não pode ter mais de 120 anos');
    } else {
      this._birthDate = bdate;
    }
  }
}

// exercício 2
class Student extends Person {
  private _enrollment: string;
  private _examGrade: number[] = [];
  private _worksGrades: number[] = [];

  constructor(
    name: string,
    bdate: Date
  ) {
    super(name, bdate);

    this._enrollment = this.generateEnrollment();
  }

  set examGrade(grades: number[]) {
    if (grades.length > 4) throw new Error('Só é possível cadastrar até 4 notas para prova.');
    this._examGrade = grades;
  }

  get examGrade(): number[] {
    return this._examGrade;
  }

  set worksGrade(grades: number[]) {
    if (grades.length > 2) throw new Error('Só é possível cadastrar até 2 notas para trabalhos.');
    this._worksGrades = grades;
  }

  get worksGrade(): number[] {
    return this._worksGrades;
  }

  set enrollment(enr: string) {
    if (enr.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    this._enrollment = enr;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  sumGrades = (): number => {
    const sumTests = this._examGrade.reduce((ac, numb) => ac + numb, 0);
    const sumWorks = this._worksGrades.reduce((ac, numb) => ac + numb, 0);
    return sumTests + sumWorks;
  }

  sumAverageGrade = (): number => {
    const totalSum = this.sumGrades();
    const lengthTotal = this._examGrade.length + this._worksGrades.length;
    return totalSum / lengthTotal;
  }

  generateEnrollment = (): string => {
    const firstPart = this.name.split(' ')[0];
    let finalEnrollment = firstPart;

    for (let i = finalEnrollment.length; i < 16; i += 1) {
      const random = Math.floor(Math.random() * 10);
      finalEnrollment += random;
    }

    return finalEnrollment;
  }
}

const student1 = new Student('Maysa', new Date('2003-5-23'));
student1.worksGrade = [25, 20];
student1.examGrade = [25, 20, 25, 23];

// exercício 3
interface Employee {
  registration: string,
  salary: number,
  admissionDate: Date,
  generateRegistration(): string,
}

// exercício 4
class Subject {
  constructor(
    private _name: string
  ) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    if (n.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');

    this._name = n;
  }
}

const math = new Subject('Matemática');
const hist = new Subject('História');
const fil = new Subject('Filosofia');

// exercício 5
class Teacher extends Person implements Employee {
  private _registration: string = '';
  private _admissionDate: Date = new Date();

  constructor(
    name: string,
    bDate: Date,
    private _salary: number,
    private _subject: Subject,
  ) {
    super(name, bDate);
    this.salary = _salary;
    this.subject = _subject;
    this.registration = this.generateRegistration();
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('o salário não pode ser negativo');
    this._salary = value;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(subj: Subject) {
    this._subject = subj;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(str: string) {
    if (str.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres');

    this._registration = str;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    const isFuture = date.getTime() > new Date().getTime();
    if (isFuture) throw new Error('A data de admissão não pode ser no futuro');

    this._admissionDate = date;
  }

  generateRegistration = (): string => {
    let str = 'RGSTR-';

    for (let index = 0; index < 10; index += 1) {
      const random = Math.floor(Math.random() * 10);
      str += random;
    }

    return str;
  }
}

const firstTeacher = new Teacher('Simoni', new Date('1989-06-20'), 4000, math);

console.log(firstTeacher);