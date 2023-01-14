import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/Nav/NavBar'
import MainCarousel from './MainCarousel/MainCarousel'
import LocationsCards from './components/LocationsCards/LocationsCards'
import MoreSwiper from './components/MoreSwiper/MoreSwiper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <div className="carousel-section">
        <MainCarousel />
      </div>
      <section className='locations-section'>
        <div className="locations-background">
          <img src="img/bubble-background.svg" />
        </div>
        <LocationsCards />
      </section>
      <section className='more-info-section'>
        <MoreSwiper />
      </section>
      <section className='insurance-section'>
        <img src="/img/bg-inusrance.svg" />

      </section>
    </div>
  )
}

export default App
