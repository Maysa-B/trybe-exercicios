# Exercícios - 4.3
### Aprofunde seus conhecimentos

Leia atentamente os enunciados e faça o que se pede!

> Recomendamos que você utilize o  `debugger`  ou o  `console.log()`  durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o  `debugger`  , acesse nosso  [conteúdo](https://app.betrybe.com/course/real-life-engineer/vscode) sobre isso.

1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:


```shell
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
```

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

#### BabySteps:
- Variável que armazena o fatorial;
- For: multiplicar o resultado anterior pelo próximo algarismo;
- Console.log: imprimir o resultado.

----------

2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

```javascript
let word = 'tryber';
```

#### BabySteps:
- Variável: para armazenar a palavra escolhida e outra para a palavra invertida;
- For: para percorrer toda a string;
- Devemos adicionar letra pr letra à uma nova string;
- Console.log: mostrar o resultado.

----------

3. Considere o array de strings abaixo:

```javascript
let array = ['java', 'javascript', 'python', 'html', 'css'];
```

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

#### BabySteps:
- Let: uma variável para a maior palavra e uma para a menor;
- For: para passar por todas as palavras;
- IF: para fazer a comparação;
- .length: determina o 'comprimento' das palavras.

----------

4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

#### BabySteps:
- For: como estrutura de repetição;
	- sendo dois: um para o número a ser verificado e outro para realizar a divisão.
- Verificar se o número é divisivel por mais algum número além dele e de 1;
	- Para isso: `if (index % index2 === 0)`
- Verificar se o número primo descoberto é o maior até o momento.

## Bônus

1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor  `n`  qualquer, seja  `n > 1`  , imprima na tela um quadrado feito de asteriscos de lado de tamanho  `n`  . Por exemplo:

```shell
n = 5

*****
*****
*****
*****
*****
```

----------

2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com  `5`  asteriscos de base. Por exemplo:


```shell
n = 5

*
**
***
****
*****
```

----------

3- Agora inverta o lado do triângulo. Por exemplo:


```shell
n = 5

    *
   **
  ***
 ****
*****
```

Atenção! Note que esse exercício é  _bem mais complexo que o anterior!_ Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

----------

4- Depois, faça uma pirâmide com  `n`  asteriscos de base:

```shell
n = 5

  *
 ***
*****
```

----------

5- Faça uma pirâmide com  `n`  asteriscos de base que seja vazia no meio. Assuma que o valor de  `n`  será sempre ímpar:

```shell
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
```

----------

6- Faça um programa que diz se um número definido numa variável é primo ou não.

-   Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
    
-   Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.