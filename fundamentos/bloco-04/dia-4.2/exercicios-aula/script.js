//arrays
//1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//3
menu.push('Contato');

console.log(menu);

//for
//1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log (groceryList[index]);
}

//for/of
//1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log (name);
}