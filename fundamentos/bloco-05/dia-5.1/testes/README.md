# Exercícios de aula - 5.1

## Exercício 1
Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo.

```html
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```

Agora você! Faça o seguinte:

1.  Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
2.  Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
3.  Por fim, recupere o subtítulo e altere-o também.

Utilizando o mesmo template de exercício anterior:

4.  Adicione uma classe igual para os dois parágrafos.
5.  Recupere os seus parágrafos via código  _JavaScript_ , usando a função  `getElementsByClassName`  ;
6.  Altere algum estilo do primeiro deles.
7.  Recupere o subtítulo e altere a cor dele usando a função  `getElementsByTagName`  .

## Exercício 2
### Seletores 3

Além disso, vamos consolidar a manipulação dos elementos  `HTML`  , colocando a cor do Administrador de Tempo da Trybe como na imagem abaixo usando apenas o JavaScript!

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/javascript/images/time-exercise-808be0ece63a2ab6b8801ce6f5e5636c.png)

Administrador de tempo finalizado.

Você vai precisar usar o que aprendeu sobre  `getElementBy`  e  `querySelector`  para colocar em prática.

Antes de iniciar, crie um arquivo  _HTML_ na pasta  `exercises/5_1`  e copie o código abaixo:


```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Administrador do Tempo</title>
  </head>
  <body id="container">
    <header id="header-container">
      <h1>Administrador do Tempo da Trybe</h1>
    </header>

    <section class="emergency-tasks">
      <div>
        <h3>Urgente e Importante</h3>
      </div>
      <div>
        <h3>Urgente e Não-Importante</h3>
      </div>
    </section>

    <section class="no-emergency-tasks">
      <div>
        <h3>Não-Urgente e Importante</h3>
      </div>
      <div>
        <h3>Não-Urgente e Não-Importante</h3>
      </div>
    </section>

    <footer id="footer-container">
      <div>&copy; Trybe</div>
    </footer>
    <script src="script.js"></script>
  </body>
</html>
```

Perceba que agora, na tag  `script`  , temos o atributo  `src`  . Ele servirá para importarmos arquivos .js externos, e funciona de forma semelhante à importação de arquivos CSS. Assim, mantemos nosso código HTML mais limpo, e podemos editar com mais facilidade nosso JavaScript. Legal, não é?

Crie um arquivo  _JavaScript_ com o nome de "script.js" na pasta  `exercises/5_1`  e coloque seus conhecimentos de  `getElementBy`  e  `querySelector`  em prática.

Crie também um arquivo  _CSS_ e copie o código abaixo para adicionar estilo à página. Fique a vontade para soltar a criatividade e alterar o arquivo como desejar!

```css
* {
  margin: 0;
}

#container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

#header-container {
  color: white;
  padding: 20px;
}

.emergency-tasks {
  display: inline-block;
  height: 400px;
  margin: 56px 0;
  width: 400px;
}

.emergency-tasks div {
  height: 198px;
}
.emergency-tasks h3 {
  color: white;
  margin-top: 10px;
  padding: 10px;
}

.no-emergency-tasks {
  display: inline-block;
  height: 400px;
  width: 400px;
}

.no-emergency-tasks div {
  height: 198px;
}

.no-emergency-tasks h3 {
  color: white;
  margin-top: 10px;
  padding: 10px;
}

#footer-container {
  color: white;
  font-weight: 700;
  padding: 15px;
  text-align: center;
}
```