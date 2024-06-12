import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './Products.css'

function Allproducts() {
  const [products, setProducts] = useState([])
  const category_id = 4 // Ett default category_id

  const fetchData = async () => {
    try {
      const response = await axios.get(`/products/${category_id}`)
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Allproducts
