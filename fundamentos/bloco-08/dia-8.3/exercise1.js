const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function formatedBookNames() {
 let dados = books.map((id) => {
    return `${id.name} - ${id.genre} - ${id.author.name}`;
  });

  return dados;
}

// console.log(formatedBookNames());

function nameAndAge() {
  let ageWasWrite = books.map((id) => {
    return {
      age: (id.releaseYear - id.author.birthYear),
      author: id.author.name
    }
  })

  ageWasWrite.sort((a, b) => a.age - b.age)

  return ageWasWrite;
}

// console.log(nameAndAge());

function fantasyOrScienceFiction() {
  let result = books.filter((id) => {
    if (id.genre === 'Fantasia' || id.genre === 'Ficção Científica') {
      return id;
    }
  })

  return result;
}

// console.log(fantasyOrScienceFiction());

function fantasyOrScienceFictionAuthors() {
  const fantasyAndScience = fantasyOrScienceFiction();
  let authors = fantasyAndScience.map((id) => id.author.name).sort();

  return authors;
}

// console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  let aged = books.filter((id) => {
    if (2022 - id.releaseYear >= 60) {
      return id;
    }
  }).map((id) => id.name);

  return aged;
}

// console.log(oldBooks());

function authorWith3DotsOnName() {
  let result = books.filter((id) => {
    if (id.author.name.split('.').length > 3) {
      return id;
    }
  }).map((id) => id.author.name);

  return result;
}

console.log(authorWith3DotsOnName());
