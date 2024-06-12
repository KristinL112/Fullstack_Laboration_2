import axios from 'axios'
import { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import './SearchComponent.css'

const SearchComponent = () => {
  const [products, setProducts] = useState([])
  // const [searchTerm, setSearchTerm] = useState('')

  const fetchData = async searchTerm => {
    try {
      const response = await axios.get('/products/', {
        params: { titel: searchTerm }
      })

      console.log(response.data)
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSearch = searchTerm => {
    fetchData(searchTerm)
  }

  return (
    <div className="search-wrapper">
      {/* <Form
        className="d-flex"
        onSubmit={e => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <Form.Control
          type="search"
          placeholder="Search for a product"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form> */}

      {/* SÖKRUTA */}
      <div className="search-form">
        <Form>
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              placeholder="Sök efter produkt"
              onChange={e => handleSearch(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>

      {/* SÖKRESULTAT  */}
      <div className="search-results">
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
    </div>
  )
}

export default SearchComponent
