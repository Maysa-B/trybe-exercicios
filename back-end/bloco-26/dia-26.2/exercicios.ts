// exercício 1
class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk():void {
    console.log('Buzinando: bi, bi, bi');
  }

  turnOn():void {
    console.log('O carro foi ligado');
  }

  turnOff():void {
    console.log('O carro foi desligado');
  }

  speedUp():void {
    console.log('O carro está acelerando');
  }

  speedDown():void {
    console.log('O carro está desacelerando');
  }

  stop():void {
    console.log('O carro parou');
  }

  turn(direcao:string):void {
    console.log('O carro está virando à ' + direcao);
  }

  openDoor(doorNumber:number):void {
    console.log('Abriu a porta de número ' + doorNumber);
  }

  closeDoor(doorNumber:number):void {
    console.log('Fechou a porta de número ' + doorNumber);
  }
}

// exercício 2
const myCar = new Car('Honda', 'Preto', 4);
/*myCar.turnOn();
myCar.speedUp();
myCar.speedDown();
myCar.turn('esquerda');
myCar.speedUp();
myCar.speedDown();
myCar.turn('direita');
myCar.speedUp();
myCar.speedDown();
myCar.turn('direita');
myCar.speedUp();
myCar.speedDown();
myCar.openDoor(4);
myCar.closeDoor(4);
myCar.speedUp();
myCar.speedDown();
myCar.turn('direita');
myCar.speedUp();
myCar.speedDown();
myCar.turn('esquerda');
myCar.speedUp();
myCar.speedDown();
myCar.turn('direita');
myCar.speedUp();
myCar.speedDown();
myCar.turnOff(); */

type Slices = 4 | 6 | 8;

// exercício 3
interface Pizza {
  flavor: string;
  slices: Slices;
}

// exercício 4
interface PizzaComum extends Pizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni'; 
}

interface PizzaVeg extends Pizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo'; 
}

interface PizzaDoce extends Pizza {
  flavor: 'Nutela' | 'Goiabada com queijo' | 'Marchmallow';
  slices: 4;
}

const pizza1 : Pizza = {
  flavor: 'Calabresa', 
  slices: 8
};
const pizza2 : Pizza = {
  flavor: 'Marguerita', 
  slices: 6
};

// console.log(pizza1);
// console.log(pizza2);

const pizzaComum1: PizzaComum = {
  flavor: 'Calabresa', 
  slices: 8
};

const pizzaComum2 : PizzaComum = {
  flavor: 'Frango', 
  slices: 6
};

const pizzaComum3 : PizzaComum = {
  flavor: 'Pepperoni', 
  slices: 4
};

const pizzaVeg1 : PizzaVeg = {
  flavor: 'Cogumelo',
  slices: 4
}

const pizzaVeg2 : PizzaVeg = {
  flavor: 'Marguerita',
  slices: 6
}

const pizzaDoce : PizzaDoce = {
  flavor: 'Nutela',
  slices: 4
}

console.log(pizzaComum1);
console.log(pizzaComum2);
console.log(pizzaComum3);
console.log(pizzaVeg1);
console.log(pizzaVeg2);
console.log(pizzaDoce);

// exercício 5
type myCallback<T> = (value: T, index?: number, array?: T[]) => boolean; 

const myFilter = <T>(array: T[], callback: myCallback<T>) : T[] => {
  const result: T[] = [];

  for (let id = 0; id < array.length; id += 1) {
    const isTrue : boolean = callback(array[id], id, array);

    if (isTrue) {
      result.push(array[id]);
    }
  }

  return result;
};

const callback1 : myCallback<number> = (value) => {
  return (value > 50);
}

const array: number[] = [23, 54, 6, 86, 89, 43, 245, 65];

const testeExercicio5 = myFilter(array, callback1);
console.log(testeExercicio5);