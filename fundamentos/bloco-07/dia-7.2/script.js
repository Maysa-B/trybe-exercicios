const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const phone = order.phoneNumber;
  const rua = order.address.street;
  const number = order.address.number;
  const ap = order.address.apartment;

  return `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${phone}, R. ${rua}, Nº ${number}, AP: ${ap}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = '50,00'
  const cliente = order.name;
  const pedido = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const preco = order.payment.total;

  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

  return `Olá ${cliente}, o total do seu pedido de ${pedido} e ${bebida} é R$ ${preco}.`
}

console.log(orderModifier(order));