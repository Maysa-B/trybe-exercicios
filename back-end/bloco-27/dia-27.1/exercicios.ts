// exercicio 1 e 2
class Student {
  matricula: number;
  name: string;
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  t1: number;
  t2: number;

  constructor(
    m: number,
    n: string,
    p1: number,
    p2: number,
    p3: number,
    p4: number,
    t1: number,
    t2: number,
  ) {
    this.matricula = m;
    this.name = n;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.t1 = t1;
    this.t2 = t2;
  }

  notaSum = () => {
    const soma = this.p1 + this.p2 + this.p3 + this.p4 + this.t1 + this.t2;
    return soma;
  }

  notaMedia = () => {
    const soma = this.notaSum();
    return soma / 6;
  }
};

const firstStudent = new Student(1, 'Maysa', 3, 10, 8, 5, 9, 7.6);
// console.log(firstStudent.notaMedia());
// console.log(firstStudent.notaSum());

// exercicio 3 e 4
class Client {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

class OrderItem {
  name: string;
  price: number;

  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }
}

class Order {
  client: Client;
  items: OrderItem[];
  payment: string;
  discount: number;

  constructor(c: Client, i: OrderItem[], p: string, d: number) {
    this.client = c;
    this.items = i;
    this.payment = p;
    this.discount = d;
  }

  totalPrice = () => {
    const price = this.items.reduce((acc, item) => acc + item.price, 0);
    return price;
  }

  totalPriceWDiscount = () => {
    const price = this.totalPrice();
    const percentual = 1 - this.discount;
    return price * percentual;
  }
}

const user1 = new Client('Maysa');
const food1 = new OrderItem('X-Burguer', 15);
const food2 = new OrderItem('Hot Dog', 15);
const drink1 = new OrderItem('Coke', 8);
const desert1 = new OrderItem('Brownie c/ sorvete', 12);
const order = new Order(user1, [food1, food2, drink1, desert1], 'cartão', 0.1);
// console.log(order.client);
// console.log(order.items);
// console.log(order.totalPrice());
// console.log(order.totalPriceWDiscount());

// exercício 5
class Data {
  private day: number = 0;
  private month: number = 0;
  private year: number = 0;

  // ideia de validação: https://www.javascriptprogressivo.net/2018/12/Como-Validar-Data-Java-Script.html
  constructor(d: number, m: number, y: number) {
    switch (m) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if (d > 0 && d <= 31) this.setDate(d, m, y);
        break;
      case 4: case 6: case 9: case 11:
        if (d > 0 && d <= 30) this.setDate(d, m, y);
        break;
      case 2:
        if (y % 4 === 0) {
          if (d > 0 && d <= 29) this.setDate(d, m, y);
        } else {
          if (d > 0 && d <= 28) this.setDate(d, m, y);
        }
        break;
      default:
        this.setPadrao();
    }
  }

  private setPadrao = () => {
    this.day = 1;
    this.month = 1;
    this.year = 1900;
  }

  private setDate = (d: number, m: number, y: number) => {
    this.day = d;
    this.month = m;
    this.year = y;
  }

  getMonthName = () => {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    ;
    
    return months[this.month - 1];
  }

  isLeapYear = () => {
    return this.year % 4 === 0;
  }

  compare = (date: Data) => {
    if (date.year > this.year) return -1;
    if (date.year < this.year) return 1;
    if (date.month < this.month) return -1;
    if (date.month > this.month) return 1;
    if (date.day < this.day) return -1;
    if (date.day > this.day) return 1;
    return 0;
  }

  format = (formato:string) => {
    const dayFormated = this.day > 9 ? JSON.stringify(this.day): `0${this.day}`;
    const monthFormated = this.month > 9 ? JSON.stringify(this.month) : `0${this.month}`;
    const yearString = JSON.stringify(this.year);

    return formato.replace(/dd/, dayFormated)
    .replace(/aaaa/, yearString)
    .replace(/mm/, monthFormated)
    .replace(/aa/, `${yearString[2]}${yearString[3]}`)
    .replace(/M/, this.getMonthName());
  }
}

const data1 = new Data(23, 5, 2003);
console.log('--- Data 1 ---');
console.log(data1.getMonthName());
console.log(data1.format('dd/mm/aaaa'));
console.log(data1.isLeapYear());
const data2 = new Data(19, 2, 2017);
console.log('--- Data 2 ---');
console.log(data2.getMonthName());
console.log(data2.format('dd de M de aa'));
console.log(data2.isLeapYear());
const data3 = new Data(8, 1, 2022);
console.log('--- Data 3 ---');
console.log(data3.getMonthName());
console.log(data3.format('aa-mm-dd'));
console.log(data3.isLeapYear());

console.log('--- Comparações ---');
console.log('--- Data 1 ---');
console.log(data1.compare(data1));
console.log(data1.compare(data2));
console.log(data1.compare(data3));
console.log('--- Data 2 ---');
console.log(data2.compare(data1));
console.log(data2.compare(data2));
console.log(data2.compare(data3));
console.log('--- Data 3 ---');
console.log(data3.compare(data1));
console.log(data3.compare(data2));
console.log(data3.compare(data3));
