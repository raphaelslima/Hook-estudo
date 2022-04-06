// Importações dos reducres
import reducer from './reducers/reducer'

// Estado inicial da aplicação
const initialState = {
  number: 0,
  cart: [],
  product: [],
  user: null
}

export { reducer, initialState }
