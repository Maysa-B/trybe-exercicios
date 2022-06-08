const Redux = require('redux');

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const next = () => ({
  type: 'NEXT_COLOR',
});

const previous = () => ({
  type: 'PREVIOUS_COLOR',
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR': 
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1};
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1};
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

// parte de puxar do HTML
const buttonPrev = document.getElementById('previous');
const buttonNext = document.getElementById('next');
const container = document.getElementById('container');
const nameColor = document.getElementById('value');

console.log(buttonNext)

buttonPrev.addEventListener('click', () => {console.log(previous())} )
buttonNext.addEventListener('click', () => store.dispatch(next()));

store.subscribe(() => {
  console.log('atualizou', store.getState());
  container.style.backgroundColor = store.index;
  nameColor.innerHTML = store.index;
})