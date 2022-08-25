const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

/* {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
*/

let activities = [];

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (name) {
    if (name.length < 4) {
      return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
    }
    return next();
  }

  res.status(400).json({ message: 'O campo name é obrigatório' });
}

const priceValidation = (req, res, next) => {
  const { price } = req.body;

  if (price) {
    if (Number(price) <= 0) {
      return res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' });
    }
    return next();
  }

  res.status(400).json({ message: 'O campo price é obrigatório' });
}

const createdAtValidation = (req, res, next) => {
  const { description: { createdAt } } = req.body;
  const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (regex.test(createdAt)) {
    return next();
  }


  return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
}

const descriptionValidation = (req, res, next) => {
  const { description } = req.body;

  if (description) {
    if (description.createdAt) {
      if (description.rating) {
        if (description.difficulty) {
          return next();
        }

        return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
      }
      return res.status(400).json({ message: 'O campo rating é obrigatório' });
    }

    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  }

  return res.status(400).json({ message: 'O campo description é obrigatório' });
}

const ratingValidation = (req, res, next) => {
  const { description: { rating } } = req.body;

  if (Number(rating) > 5 || Number(rating) < 1) {
    return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }

  next();
}

const difficultyValidation = (req, res, next) => {
  const { description: { difficulty } } = req.body;

  if (['Fácil', 'Médio', 'Difícil'].some((cur) => cur === difficulty)) {
    return next();
  }

  res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
}

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(200).json({ message: 'Token inválido!'});
  }

  if (users.includes(authorization)) {
    return next();
  }

  res.status(200).json({ message: 'Token inválido!'});
}

app.post('/activities',
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  difficultyValidation,
  tokenValidation,
  (req, res) => {
    const bodyObj = req.body;

    activities.push(bodyObj);
    res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
  })


let users = [];

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/signup', (req, res) => {
  const person = req.body;

  if ( !person.email || !person.senha || !person.firstName || !person.phone) {
    return res.status(400).json({ message: 'Campos ausentes!'});
  }

  const token = generateToken();

  users.push(token);
  res.status(200).json({ token });
})

module.exports = app;