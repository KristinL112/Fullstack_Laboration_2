import Carousel from 'react-bootstrap/Carousel'
import './CarouselComponent.css'

function CarouselComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="/images/Chokladska.webp" alt="Choladskära" />
          <img src="/images/Nejlikrot-Totally.webp" alt="Nejlikrot-Totally" />
          <img src="/images/Salvia-Apricot.webp" alt="Salvia-Apricot" />
          <img src="/images/Borstnejlika-Sooty.webp" alt="Borstnejlika-Sooty" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/gillenia.webp" alt="Gillenia" />
          <img
            src="/images/Stjarnflocka_StarofLove.webp"
            alt="Stjarnflocka_StarofLove"
          />
          <img src="/images/astrantiwebp.webp" alt="astrantiwebp" />
          <img src="/images/Stja_CC_88rnflocka.webp" alt="Stjarnflocka" />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/Nejlikrot-Totally.webp" alt="Nejlikrot-Totally" />
          <img src="/images/astrantiwebp.webp" alt="astrantiwebp" />
          <img src="/images/gillenia.webp" alt="Gillenia" />
          <img src="/images/Stja_CC_88rnflocka.webp" alt="Stjarnflocka" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
