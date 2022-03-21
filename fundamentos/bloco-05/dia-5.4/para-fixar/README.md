# Para fixar - 5.4
Para os exemplos a seguir, você pode usar o seguinte código em seu  `index.html`  para poder usar o Live Server. Mas se preferir, pode executar os comandos no console também.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Dê uma olhada no seu console para checar os exemplos sendo impressos.<br />;)</h1>
  <script src="script.js"></script>
</body>
</html>
```

Exemplo de utilização:

```javascript
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear(); // limpa todas as entradas salvas em localStorage
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
```
Exemplo de utilização do sessionStorage:

```javascript
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
```

Exemplos de uso do `JSON.stringfy` e `JSON.parse()`:
```javascript
const myObj = {
  name: 'Link',
  age: 20,
};

// Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.

localStorage.setItem('myData', JSON.stringify(myObj));

// Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.

// Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.

const recoveredObject = JSON.parse(localStorage.getItem('myData'));

// Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.

console.log(recoveredObject); // { name: 'Link', age: 20 }
```
Veja agora mais exemplos do que pode ser salvo no  `localStorage`  ou  `sessionStorage`  :

Copiar

```javascript
let organization = {
  name: 'trybe',
  since: 2019,
};

// A variável 'storage' pode ser localStorage ou sessionStorage
let storage = localStorage;

storage.setItem('trybe', JSON.stringify(organization));
let org = JSON.parse(storage.getItem('trybe'));
console.log(org); // { name: 'trybe', since: 2019 }

let classes = ['2019/set', '2019/oct'];
storage.setItem('classes', JSON.stringify(classes));
let cls = JSON.parse(storage.getItem('classes'));
console.log(cls); // ['2019/set', '2019/oct']
```

Exemplo de utilização `localStorage` e `sessionStorage`:
Para os dois próximos exemplos, use separadamente cada script (main e novoMain).

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo WebStorage</title>
</head>
<body>
  <header>
    <h1>Diferenças de armazenamento entre LocalStorage e WebStorage</h1>
  </header>
  <main>
    <section>
      <h2>Frases armazenadas</h2>
      <input type="text" id="phrases-input" />
      <button id="add-button">Adicionar frase</button>
      <div>
        <ul id="phrases-list">
        </ul>
      </div>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```