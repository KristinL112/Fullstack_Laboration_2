// eslint-disable-next-line react-refresh/only-export-components
export const totalItem = cart => {
  return cart.reduce((sum, product) => sum + product.quantity, 0)
}

// eslint-disable-next-line react-refresh/only-export-components
export const totalPrice = cart => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  )
}

const CartReducer = (state, action) => {
  let IndexI
  let IndexD
  switch (action.type) {
    case 'Add':
      return [...state, action.product]

    case 'Remove':
      // Hantera borttagning av produkt här
      return state.filter(p => p.id !== action.Id)

    // Ökning av antal produkter här
    case 'Increase':
      IndexI = state.findIndex(p => p.id === action.id)
      state[IndexI].quantity = state[IndexI].quantity += 1
      return [...state]

    case 'Decrease':
      // Hantera minskning av antal produkter här
      IndexD = state.findIndex(p => p.id === action.id)
      state[IndexD].quantity = state[IndexI].quantity -= 1
      return [...state]

    default:
      state
  }
}

export default CartReducer
