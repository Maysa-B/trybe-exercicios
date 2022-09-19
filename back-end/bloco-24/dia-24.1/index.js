const express = require('express');
const app = express();
const controller = require('./controller/book.controller');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', controller.getBooks);
app.get('/books/:id', controller.getBooksById);
app.post('/books', controller.createBooks);
app.put('/books/:id', controller.updateBooks);
app.delete('/books/:id', controller.deleteBooks);