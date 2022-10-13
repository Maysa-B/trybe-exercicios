import { Person, carolina, joao, lucas, marta } from './exercicios';

class OrderItem {
  name: string;
  price: number;

  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }
}

class Order {
  static id: number = 0;
  createdAt: Date = new Date();
  client: Person;
  items: OrderItem[];
  payment: 'dinheiro' | 'cartão' | 'vale';
  discount: number;

  constructor(c: Person, i: OrderItem[], p: 'dinheiro' | 'cartão' | 'vale', d: number) {
    this.client = c;
    this.items = i;
    this.payment = p;
    this.discount = d;
    Order.id += 1;
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

const food1 = new OrderItem('X-Burguer', 15);
const food2 = new OrderItem('Hot Dog', 15);
const drink1 = new OrderItem('Coke', 8);
const desert1 = new OrderItem('Brownie c/ sorvete', 12);

const firstOrder = new Order(carolina, [food1, drink1], 'cartão', 0.1);
const secondOrder = new Order(joao, [food2, desert1], 'cartão', 0.1);
const thirdOrder = new Order(lucas, [food1, food2], 'cartão', 0.1);
const fourthOrder = new Order(marta, [food1, drink1, food2], 'cartão', 0.1);

class OrderRepository {
  orders: Order[] = [];

  addOrder = (newOrder: Order) => {
    this.orders.push(newOrder);
  }

  removeOrder = (orderToRemove: Order) => {
    const filtered = this.orders.filter((cur) => cur !== orderToRemove);
    this.orders = filtered;
  }

  listByClient = (client: Person) => {
    return this.orders.filter((cur) => cur.client === client);
  }
}

const repository = new OrderRepository();

console.log(repository.orders);
repository.addOrder(firstOrder);
repository.addOrder(secondOrder);
repository.addOrder(thirdOrder);
repository.addOrder(fourthOrder);
console.log(repository.orders);
console.log(repository.listByClient(marta));
console.log(repository.orders);
repository.removeOrder(firstOrder);
console.log(repository.orders);
console.log(Order.id);
