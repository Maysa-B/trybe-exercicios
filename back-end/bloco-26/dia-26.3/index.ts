import express from 'express';
import UserController from './controllers/controllerUser';

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

const userController = new UserController();

app.get('/users', userController.getAll);
app.get('/users/:id', userController.getById);