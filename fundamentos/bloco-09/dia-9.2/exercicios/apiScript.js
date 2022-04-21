// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => append(data));
};

const append = (piada) => {
  const text = piada.joke;
  const container = document.getElementById('jokeContainer');
  container.innerText = text;
}

append(fetchJoke());

window.onload = () => fetchJoke();