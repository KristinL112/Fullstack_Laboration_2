import { useContext } from 'react'
import CartProduct from '../components/CartProduct'
import { totalItem, totalPrice } from '../features/CartUtils'
import { CartContext } from '../features/ContextProvider'

const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className="container mt-3 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-8 text-center">
          <h3>Dina varor</h3>
          {cart.map((p, index) => (
            <CartProduct key={index} product={p}></CartProduct>
          ))}
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <div className="bg-secondary p-3 text-white">
            <h5>Antal varor: {totalItem(cart)}</h5>
            <h5>Total summa: ${totalPrice(cart)} </h5>
            <button className="btn btn-primary">Gå till kassan</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
