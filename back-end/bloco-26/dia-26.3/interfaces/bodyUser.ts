// CREATE TABLE `Users` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `name` varchar(100) NOT NULL,
//   `email` varchar(45) NOT NULL,
//   `password` varchar(45) NOT NULL,
//   PRIMARY KEY (`id`)
// );

export default interface INewUserBody {
  name: string,
  email: string,
  password: string
}