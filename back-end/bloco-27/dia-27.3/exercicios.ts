// exercício 1
abstract class Person {
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
    const diff = Math.abs(new Date().getTime() - bdate.getTime());
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
interface Enrollable {
  enrollment: string,
  generateEnrollment(): string,
}

class Employee extends Person implements Enrollable {
  private _admissionDate: Date = new Date();
  private _enrollment: string;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  set enrollment(enr: string) {
    if (enr.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    this._enrollment = enr;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    const isFuture = date.getTime() > new Date().getTime();
    if (isFuture) throw new Error('A data de admissão não pode ser no futuro');

    this._admissionDate = date;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('o salário não pode ser negativo');
    this._salary = value;
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

class Teacher extends Employee {
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    private _subject: Subject
  ) {
    super(name, birthDate, salary);
  }

  get subject(): Subject { return this._subject };

  set subject(subj: Subject) { this._subject = subj }
}

class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(
    name: string,
    bdate: Date
  ) {
    super(name, bdate);

    this._enrollment = this.generateEnrollment();
  }

  set enrollment(enr: string) {
    if (enr.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    this._enrollment = enr;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  sumGrades = (): number => {
    return this._evaluationsResults.reduce((acc, cur) => acc + cur.score, 0);
  }

  sumAverageGrades = (): number => {
    return this.sumGrades() / this._evaluationsResults.length;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  addEvaluationResult = (evaluation: EvaluationResult) => {
    this._evaluationsResults.push(evaluation);
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

// exercício 3
abstract class Evaluation {
  constructor(
    private _score: number,
    private _teacher: Teacher,
  ) { }

  set score(scr: number) {
    if (scr < 0) throw new Error('A nota não pode ser negativa');

    this._score = scr;
  }

  get score(): number { return this._score }

  set teacher(tchr: Teacher) { this._teacher = tchr }

  get teacher(): Teacher { return this._teacher }
}

class EvaluationResult {
  constructor(
    private _evaluation: Evaluation,
    private _score: number
  ) { }

  get evaluation(): Evaluation { return this._evaluation }

  set evaluation(test: Evaluation) { this._evaluation = test }

  get score(): number { return this._score }

  set score(value: number) { this._score = value }
}

// exercício 4
class Exam extends Evaluation {
  constructor(
    _score: number,
    _teacher: Teacher
  ) {
    super(_score, _teacher);
  }

  set score(value: number) {
    if (value > 25) throw new Error('O valor não pode ser maior que 25');

    super.score = value;
  }
}

class Work extends Evaluation {
  constructor(
    _score: number,
    _teacher: Teacher
  ) {
    super(_score, _teacher);
  }

  set score(value: number) {
    if (value > 50) throw new Error('O valor não pode ser maior que 50');

    super.score = value;
  }
}

// testes sujeridos pelo gabarito

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const htry = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, htry);

const examMath = new Exam(25, marta);
const workMath = new Work(50, marta);
const examhtry = new Exam(25, joao);
const workhtry = new Work(50, joao);

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
carolina.addEvaluationResult(new EvaluationResult(examhtry, 25));
carolina.addEvaluationResult(new EvaluationResult(workhtry, 50));

console.log('Avaliações: ', carolina.evaluationsResults);
console.log('Soma das notas: ', carolina.sumGrades());
console.log('Média das notas: ', carolina.sumAverageGrades());

lucas.addEvaluationResult(new EvaluationResult(examMath, 25));
lucas.addEvaluationResult(new EvaluationResult(workMath, 49));
lucas.addEvaluationResult(new EvaluationResult(examhtry, 20));
lucas.addEvaluationResult(new EvaluationResult(workhtry, 50));

console.log('Avaliações: ', lucas.evaluationsResults);
console.log('Soma das notas: ', lucas.sumGrades());
console.log('Média das notas: ', lucas.sumAverageGrades());