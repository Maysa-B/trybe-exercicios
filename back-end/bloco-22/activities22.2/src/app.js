const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities', (req, res) => {
  res.status(200).json(activities);
})

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const activ = activities.find((curr) => curr.id === Number(id));
  res.status(200).json(activ);
})

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;

  const filtered = activities.filter((curr) => curr.status === status);
  res.status(200).json(filtered);
})

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;

  const filtered = activities.filter((curr) => curr.description.includes(q));
  res.status(200).json(filtered);
})

module.exports = app;