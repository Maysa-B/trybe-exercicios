const fs = require('fs').promises;

const simpsons = 'my-scripts/simpsons.json';
const simpsonFamily = 'my-scripts/simpsonFamily.json';

const getSimpsons = async (file) => {
  try {
    const members = await fs.readFile(file, 'utf-8');
    const array = await JSON.parse(members);
    return array;
  } catch (e) {
    console.log(`Erro: ${e}`);
  }
}

const showFamilyMembers = async () => {
  try {
    const array = await getSimpsons(simpsons);
    array.forEach((member) => console.log(`${member.id} - ${member.name}`));
  } catch (e) {
    console.log(`Erro: ${e}`);
  }
}

const whoIsThis = async (id) => {
  const promise = new Promise(async (resolve, reject) => {
    
    const simpsons = await getSimpsons(simpsons);
    const person = simpsons.find((curr) => Number(curr.id) === id);
    console.log(person);

    if(person === undefined) reject(new Error('Id não encontrado'));
    
    resolve(person);
  })

  console.log(await promise)
  return promise;
}

const deleteSimpson = async () => {
  const simpsonsData = await getSimpsons(simpsons);
  const filtered = simpsonsData.filter((curr) => curr.id !== '10'&& curr.id !== '6' );
  fs.writeFile(simpsons, JSON.stringify(filtered));
}

const onlyFamily = async () => {
  const simpsonsData = await getSimpsons(simpsons);
  const filtered = simpsonsData.filter((curr) => Number(curr.id) <= 4 );
  fs.writeFile('my-scripts/simpsonFamily.json', JSON.stringify(filtered));
}

const addNelson = async () => {
  const simpsonsData = await getSimpsons(simpsons);
  const familyData = await getSimpsons(simpsonFamily);
  const filtered = simpsonsData.filter((curr) => curr.name === 'Nelson Muntz');
  fs.writeFile('my-scripts/simpsonFamily.json', JSON.stringify([...familyData, ...filtered]));
}

const replaceNelson = async () => {
  const simpsonsData = await getSimpsons(simpsons);
  const familyData = await getSimpsons(simpsonFamily);
  const person = simpsonsData.filter((curr) => curr.name === 'Maggie Simpson');
  const filtered = familyData.filter((curr) => curr.name !== 'Nelson Muntz')
  fs.writeFile('my-scripts/simpsonFamily.json', JSON.stringify([...filtered, ...person]));
}

replaceNelson();
// addNelson();
// onlyFamily();
// deleteSimpson();
// whoIsThis(54);
// showFamilyMembers();