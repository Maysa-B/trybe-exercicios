class Superclass {
  constructor(
    public isSuper: boolean = true,
  ) { }

  sayHello = () => {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
}

const myFunc = (param: Superclass) => {
  if (param.isSuper) {
    console.log('Super!');
  } else {
    console.log('Sub!');
  }
}

const sub = new Subclass();
// myFunc(sub);
const superC = new Superclass();
// myFunc(superC);

interface MyInterface {
  myNumber: number,
  myFunc(myParam: number): string
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number
  ) { }

  myFunc(myParam: number): string {
    return `Soma: ${myParam + this.myNumber}`;
  }
}

const testeImplements = new MyClass(5);
// console.log(testeImplements.myFunc(3));

interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('Logger2: ' + param);
  }
}

interface Database {
  logger: Logger,
  save(key: string, value: string): void
}

class ExampleDatabase implements Database {
  constructor(
    public logger = new ConsoleLogger()
  ) {}

    save(key: string, value: string): void {
      this.logger.log(`Salvando o valor ${value} na chave ${key}`);
    }
}

// testes sugeridos no gabarito:
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');