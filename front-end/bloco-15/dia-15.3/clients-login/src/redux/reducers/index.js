const INITIAL_STATE = {
  validEmail: false,
  clientList: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_VALID': return (
      {
        ...state,
        validEmail: action.payload.valid
      }
    );
    case 'ADD_CLIENT': return (
      {
        ...state,
        clientList: [...state.clientList, action.payload.client]
      }
    );
    case 'REMOVE_CLIENT': return (
      {
        ...state,
        clientList: state.clientList.filter((curr) => curr.name !== action.payload.name)
      }
    );
    default: return state;
  }

}

export default reducer;