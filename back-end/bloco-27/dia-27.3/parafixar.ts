abstract class Character {
  abstract talk(): void;
  // abstract specialMove(): void;
}

class MaleCharacter extends Character {
  talk = (): void => {
    console.log('Eu sou o MaleCharacter');
  }
}

class LongRangeCharacter extends Character {
  talk = (): void => {
    console.log('Eu sou o LongRangeCharacter');
  }
}

const func = (param: Character) => {
  param.talk();
}

// func(new MaleCharacter());
// func(new LongRangeCharacter());
