import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { useContext } from 'react'
import {
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  Offcanvas
} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { BiSearch, BiShoppingBag } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import '../components/NavBar.css'
import { CartContext } from '../features/ContextProvider'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import FruktBar from '../pages/FruktBar'
import Gronsaker from '../pages/Gronsaker'
import Home from '../pages/Home'
import Odlingsrad from '../pages/Odlingsrad'
import Perenner from '../pages/Perenner'
import Rosor from '../pages/Rosor'
import SearchResult from '../pages/SearchResult'
import Sommarblommor from '../pages/Sommarblommor'
import TradBuskar from '../pages/TradBuskar'
import UtvaldaSorter from '../pages/UtvaldaSorter'

function NavBarFunction() {
  const { cart } = useContext(CartContext)
  return (
    <div className="custom-navbar">
      {['m'].map(expand => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <div className="search-icon">
            <NavLink to="/searchresult">
              <BiSearch />
            </NavLink>
          </div>

          <Link to={'/'} className="navbar-brand">
            <Image
              src="/images/Logo_GARDEN_LIFE_2.png"
              alt="logo"
              fluid
              rounded
              width={140}
              height={140}
              className="Logo"
            />
          </Link>

          <div className="d-flex justify-content-between">
            <NavLink to="/userlogin">
              <div className="mx-4"></div> {/* Mellanrum */}
              <FaRegUserCircle />
            </NavLink>
            <NavLink to="/cart">
              <div className="mx-4"></div> {/* Mellanrum */}
              <BiShoppingBag /> {cart.length}
            </NavLink>
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                GardenLife
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav id="Nav.Link" className="me-auto">
                <Link id="Nav.Link" to={'./'}>
                  Home
                </Link>
                <DropdownButton id="dropdown-basic-button" title="Shop">
                  <Dropdown.Item as={Link} to={'./utvaldasorter'}>
                    Utvalda sorter
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={'./perenner'}>
                    Perenner
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={'./tradbuskar'}>
                    Träd & buskar
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={'./fruktbar'}>
                    Frukt & Bär
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={'./sommarblommor'}>
                    Sommarblommor
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={'./rosor'}>
                    Rosor
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={'./gronsaker'}>
                    Grönsaker
                  </Dropdown.Item>
                </DropdownButton>
                <Link id="Nav.Link" to={'./odlingsrad'}>
                  Odlingsråd
                </Link>
                <Link id="Nav.Link" to={'./contact'}>
                  Kontakt
                </Link>
              </Nav>

              {/* <SearchComponent /> */}
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/utvaldasorter" element={<UtvaldaSorter />} />
            <Route path="/perenner" element={<Perenner />} />
            <Route path="/tradbuskar" element={<TradBuskar />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/fruktbar" element={<FruktBar />} />
            <Route path="/sommarblommor" element={<Sommarblommor />} />
            <Route path="/rosor" element={<Rosor />} />
            <Route path="/gronsaker" element={<Gronsaker />} />
            <Route path="/odlingsrad" element={<Odlingsrad />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Perenner></Perenner>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
        </Navbar>
      ))}
    </div>
  )
}

export default NavBarFunction
