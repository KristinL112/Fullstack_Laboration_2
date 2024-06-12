import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, [])
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node
}

export default ContextProvider
