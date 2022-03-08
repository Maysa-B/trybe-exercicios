//1
const a = 12;
const b = 4;

console.log(a + b); //adição
console.log(a - b); //subtração
console.log(a * b); //multiplicação
console.log(a / b); //divisão
console.log(a % b); //módulo

//2
const c = 15;
const d = 7;

if (c > d) {
    console.log(c);
} else {
    console.log(d);
}

//3
// usando as const a, c e d
if (a > c && a > d) {
    console.log(a);
} else if (c > d && c > a) {
    console.log(c);
} else {
    console.log(d);
}

//4
const npz = 0;

if (npz > 0) {
    console.log('positive')
} else if (npz < 0) {
    console.log('negative')
} else {
    console.log('zero')
}

//5
const a1 = 60;
const a2 = 60;
const a3 = 60;

if (a1 + a2 + a3 == 180) {
    console.log('true');
} else {
    console.log(false);
}

if (a1 < 0 || a2 < 0 || a3 < 0) {
    console.log('Algum ângulo é inválido')
}

//6
let pecaXadrez = 'RaiNha';


switch (pecaXadrez.toLowerCase()) {
    case 'peão':
        console.log('Uma casa para frente');
        break;
    case 'cavalo':
        console.log('Uma casa para o lado e duas para a frente (L)');
        break;
    case 'torre':
        console.log('Para frente e para os lados');
        break;
    case 'bispo':
        console.log('Diagonais');
        break;
    case 'rainha':
        console.log('Todas as direções');
        break;
    case 'rei':
        console.log('Uma casa para qualquer direção');
        break;
    default:
        console.log('Peça inválida');
        break;
}

//7
const nota = 84;

if (nota > 100 || nota < 0) {
    console.log('ERRO! Nota inválida');
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else {
    console.log("F");
}


//8
const n1 = 8;
const n2 = 5;
const n3 = 7;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
    console.log('true');
} else {
    console.log('false');
}

//9
const n4 = 4;
const n5 = 7;
const n6 = 6;

if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
    console.log('true');
} else {
    console.log('false');
}

//10
const custoProduto = 10;
const valorProduto = 20;
const imposto = custoProduto * 0.2;
const custoTotal = custoProduto + imposto;

const lucro = (valorProduto - custoTotal) * 1000;

if (custoProduto < 0 || valorProduto < 0) {
    console.log('Erro, valor incorreto')
} else {
    console.log('O lucro em mil produtos vendidos é igual a ' + (lucro))
}

//11
const salario = 3000;
let inss;
let ir;

if (salario <= 1556.94) {
    inss = salario * 0.08;
} else if (salario > 1556.94 && salario <= 2594.92) {
    inss = salario * 0.09;
} else if (salario > 2594.93 && salario <= 5189.82) {
    inss = salario * 0.11;
} else {
    inss = 570.88;
}

console.log (inss)
const salarioBase = salario - inss;
console.log (salarioBase)

if (salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) -142.80;
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
} else {
    ir = (salarioBase * 27.5) - 869.36;
}

const salarioLiquido = salarioBase - ir;
console.log (salarioLiquido);
