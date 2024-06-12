import Image from 'react-bootstrap/Image'
import { Link, Route, Routes } from 'react-router-dom'
import UtvaldaSorter from '../pages/UtvaldaSorter'
import './HeroComponent.css'

function Hero() {
  const handleButtonClick = () => {}

  return (
    <div className="hero">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Blomstrande tider</h1>
          <p>Handla årets utvalda växter</p>
          <Link
            to={'/utvaldasorter'}
            className="btn btn-primary"
            onClick={handleButtonClick}
          >
            SHOPPA NU
          </Link>
        </div>
        <Image src="/images/Hero_nature.jpg" alt="Hero-bild" fluid />
      </div>
      <Routes>
        <Route path="/utvaldasorter" element={<UtvaldaSorter />} />
      </Routes>
    </div>
  )
}

export default Hero
