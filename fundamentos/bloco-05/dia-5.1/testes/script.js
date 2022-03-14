const paragraph = document.getElementById("paragraph");
paragraph.style.color = "purple";
paragraph.innerHTML = 'Estou <strong>muito</strong> animada!';

document.getElementById('page-title').innerText = 'Primeira aula de interação entre JS e HTML!';

document.getElementById('subtitle').innerText = 'Dia 14/03/2022 = Primeiro dia de bloco 5';

const paragraph2 = document.getElementsByClassName('paragraphs')[1];

paragraph2.style.color = 'blue';

const subtitle = document.getElementsByTagName('h4')[0];

subtitle.style.backgroundColor = 'violet';