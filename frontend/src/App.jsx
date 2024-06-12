import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { BrowserRouter } from 'react-router-dom'
import './app.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
