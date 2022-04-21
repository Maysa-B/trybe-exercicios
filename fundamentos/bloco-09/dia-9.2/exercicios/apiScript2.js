const urlAPI = 'https://api.coincap.io/v2/assets';
const urlconvert = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
let brMoeda;

const multiply = (usd) => {
  const br = brMoeda;
  return br * usd;
}

const append = (moeda) => {
  const container = document.getElementById('container');
  const criar = document.createElement('li');
  criar.innerText = `${moeda.name} (${moeda.symbol}): ${multiply(moeda.priceUsd)}`;
  container.appendChild(criar);
}

const fetchDados = () => {
  fetch(urlAPI)
    .then(response => response.json())
    .then((data) => {
      for (let id = 0; id <= 9; id += 1) {
        append(data.data[id])
      }
    })
};

const fetchMoeda = () => {
  fetch(urlconvert)
  .then(response => response.json())
  .then(response => response.usd.brl)
  .then(response => brMoeda = response);
}

window.onload = () => {
  fetchDados();
  fetchMoeda();
};