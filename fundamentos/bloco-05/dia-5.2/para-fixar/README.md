# Para fixa - 5.2

### Parte 1
Então vamos praticar! Adicione o código abaixo a uma página  _HTML_ e adicione uma tag  `script`  . Você deverá fazer tudo a seguir usando somente  _JavaScript_ .

```html
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
```

1.  Acesse o elemento  `elementoOndeVoceEsta`  .
2.  Acesse  `pai`  a partir de  `elementoOndeVoceEsta`  e adicione uma  `color`  a ele.
3.  Acesse o  `primeiroFilhoDoFilho`  e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4.  Acesse o  `primeiroFilho`  a partir de  `pai`  .
5.  Agora acesse o  `primeiroFilho`  a partir de  `elementoOndeVoceEsta`  .
6.  Agora acesse o texto  `Atenção!`  a partir de  `elementoOndeVoceEsta`  .
7.  Agora acesse o  `terceiroFilho`  a partir de  `elementoOndeVoceEsta`  .
8.  Agora acesse o  `terceiroFilho`  a partir de  `pai`  .

----------
### Parte 2
E a prática? Aqui!

1.  Crie um irmão para  `elementoOndeVoceEsta`  .
2.  Crie um filho para  `elementoOndeVoceEsta`  .
3.  Crie um filho para  `primeiroFilhoDoFilho`  .
4.  A partir desse filho criado, acesse  `terceiroFilho`  .

### Parte 3
Para praticar:

-   Remova todos os elementos filhos de  `paiDoPai`  exceto  `pai`  ,  `elementoOndeVoceEsta`  e  `primeiroFilhoDoFilho`  .