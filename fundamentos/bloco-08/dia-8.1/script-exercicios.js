// exercício 1
const dados = (nome) => {
  let email = '';

  for (let id = 0; id < nome.length; id += 1) {
    if (nome[id] !== ' ') {
      email += nome[id];
    } else {
      email += '_';
    }

    if (id === nome.length - 1) {
      email += '@trybe.com';
    }
  }

  const emailPronto = email.toLocaleLowerCase();

  return {nome, emailPronto};
};

const newEmployees = (funct) => {
  const employees = {
    id1: funct('Pedro Guerra'), 
    id2: funct('Luiza Drumond'), 
    id3: funct('Carla Paiva'),
  }

  return employees;
};

// console.log(newEmployees(dados));

// exercício 2
const loteria = (aposta) => {
  const sorteado = Math.floor(Math.random() * 5) + 1;

  if(aposta === sorteado) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}

// console.log(loteria(3));
// exercício 3
const notas = (gabarito, student, funct) => funct(gabarito, student);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const conferir = (arrayGabarito, arrayResposta) => {
  let nota = 0;

  for (let id = 0; id < arrayGabarito.length; id += 1) {
    if (arrayResposta[id] !== 'N.A') {
      if (arrayGabarito[id] === arrayResposta[id]) {
        nota += 1;
      } else {
        nota -= 0.5;
      }
    }
  }

  return nota;
}

// console.log(notas(RIGHT_ANSWERS, STUDENT_ANSWERS, conferir));

// bonus - parte 1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDoDragon = () => {
  const max = dragon.strength;
  const dano = Math.floor(Math.random() * max) + 15;
  return dano;
};

const danoDoWarrior = () => {
  const min = warrior.strength;
  const max = min * warrior.weaponDmg;
  const dano = Math.floor(Math.random() * max) + min;
  return dano;
}

const danoEManaMago = () => {
  const min = mage.intelligence;
  const max = min * 2;
  const dano = Math.floor(Math.random() * max) + min;

  if (mage.mana > 15) {
    mage.mana -= 15;
  } else {
    return 'Não possui mana suficiente';
  }

  const valorMana = mage.mana;

  return {dano: dano, mana: valorMana};
}

// parte 2
const gameActions = {
  turnoWarrior: (funct) => {
    const dano = funct();
    warrior.damage = dano;
    dragon.healthPoints -= dano;
  },
  turnoMage: (funct) => {
    const dano = funct().dano;
    const mana = funct().mana;
    dragon.healthPoints -= dano;
    mage.damage = dano;
    mage.mana = mana;
  },
  turnoDragon: (funct) => {
    const dano = funct();
    dragon.damage = dano;
    mage.healthPoints -= dano;
    warrior.healthPoints -= dano;
  },
  turnoGeral: () => console.log(battleMembers)
};

gameActions.turnoDragon(danoDoDragon);
gameActions.turnoMage(danoEManaMago);
gameActions.turnoWarrior(danoDoWarrior);
gameActions.turnoGeral();
