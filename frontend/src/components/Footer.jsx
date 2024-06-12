import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Nav, Row, Stack } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import './Footer.css'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <div>
      <Container fluid className="custom-footer">
        <Row>
          <Col xs={12} md={4} className="d-flex justify-content-center">
            {/* Centrerar Newsletter på mindre skärmar */}
            <Newsletter />
          </Col>
          <Col xs={12} md={4}>
            <Nav id="Nav.Link">
              <Link id="Nav.Link"> Om oss</Link>
              <Link id="Nav.Link"> Köpvillkor</Link>
              <Link id="Nav.Link"> Kontakta oss</Link>
            </Nav>
          </Col>

          <Col xs={12} md={4}>
            <Stack className="Logo-footer">
              <Image
                src="/images/Logo_GARDEN_LIFE.png"
                alt="logo"
                // fluid
                rounded
                width={160}
                height={160}
                className="Logo"
              />
            </Stack>
          </Col>
          <Col>
            <div className="py-3">
              <p className="fw-bolder">&copy;Garden Life</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
