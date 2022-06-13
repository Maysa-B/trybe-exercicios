export const validationAction = {
  type: 'IS_VALID',
  payload: {
    valid: true,
  }
}

export const newClient = (client) => ({
  type: 'ADD_CLIENT',
  payload: {
    client
  }
})

export const removeClient = (name) => ({
  type: 'REMOVE_CLIENT',
  payload: {
    name
  }
})