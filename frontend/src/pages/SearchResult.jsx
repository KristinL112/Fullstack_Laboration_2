import Image from 'react-bootstrap/Image'
import SearchComponent from '../components/SearchComponent'

function Home() {
  return (
    <div>
      <SearchComponent />
      <Image src="/images/Trebladspira_banner.jpg" alt="Hero-bild" fluid />
    </div>
  )
}

export default Home
