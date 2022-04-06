// Ação do login
export function login(dispatch, name) {
  dispatch({ type: 'login', payload: name })
}
