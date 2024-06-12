import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { CartContext } from '../features/ContextProvider'
import './Products.css'

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext)

  const Increase = id => {
    const Index = cart.findIndex(p => p.id === id)
    if (cart[Index].quantity < 10) {
      dispatch({ type: 'Increase', id })
    }
  }

  const Decrease = id => {
    const Index = cart.findIndex(p => p.id === id)
    if (cart[Index].quantity > 1) {
      dispatch({ type: 'Decrease', id })
    }
  }

  return (
    <div className="d-flex border mb-3">
      <Card.Img
        variant="top"
        src={product.image_link}
        className="w-25 h-25"
        alt={product.titel}
      />
      <div className="detail">
        <h4> {product.titel}</h4>
        <h5> {product.price}</h5>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: 'Remove', id: product.id })}
        >
          Ta bort
        </button>
      </div>
    </div>
  )
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titel: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image_link: PropTypes.string
  }).isRequired
}

export default CartProduct
