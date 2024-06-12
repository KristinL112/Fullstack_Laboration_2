import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { CartContext } from '../features/ContextProvider'
import './Products.css'

function Allproducts() {
  const [products, setProducts] = useState([])
  const { dispatch } = useContext(CartContext)
  const category_id = 2 // Ett default category_id

  const fetchData = async () => {
    try {
      const response = await axios.get(`/products/${category_id}`)
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const addToCart = async product => {
    try {
      await axios.post('/cart', {
        productid: product.id,
        price: product.price,
        quantity: 1 // Antal produkter som läggs till i kundvagnen (kan vara dynamiskt)
      })
      dispatch({ type: 'Add', product: product })
    } catch (error) {
      console.error('Error adding product to cart:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Row xs={1} md={4}>
        {products.map(product => (
          <Col key={product.id}>
            <Card>
              <Card.Img
                variant="top"
                src={product.image_link}
                alt={product.titel}
              />
              <Card.Body className="card-body">
                <Card.Title>{product.titel}</Card.Title>
                <Card.Text>{product.price} kr</Card.Text>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Lägg till i kundvagn
                </button>
                {/* <button
                  className="btn btn-primary"
                  onClick={() => dispatch({ type: 'Add', product: product })}
                >
                  Lägg till i kundvagn
                </button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Allproducts
