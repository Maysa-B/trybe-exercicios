const generateRandomNumber = () => Math.floor((Math.random() * 100 ));

const upperWords = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concatStrings = (string1, string2) => string1 + string2;

const dogImage = async () => {
  const URL_DOG_API = 'https://dog.ceo/api/breeds/image/random';
  const fetch = await fetch(URL_DOG_API);
  const retorno = await fetch.json();
  return (retorno);
}

module.exports = { generateRandomNumber, upperWords, firstLetter, concatStrings, dogImage };
