import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/Nav/NavBar'
import MainCarousel from './MainCarousel/MainCarousel'
import LocationsCards from './components/LocationsCards/LocationsCards'
import MoreSwiper from './components/MoreSwiper/MoreSwiper'
import Insurance from './components/Insurance/Insurance'

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
        <Insurance />
      </section>
      <section className='video-section'>
        <div className="info">
          <h2>Lorem, ipsum.</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, reiciendis.</small>
          <div className="buttons-cont">
            <button>
              Discover More
            </button>
          </div>
        </div>
        <div className="side-video">
          <div className="video-container">
            <img src="/img/gif.gif" alt="" />
          </div>
        </div>
      </section>
      <section className='delivery-section'>
        <img src="/img/video-cover.svg" alt="" />
        <div className="gif-container">
          <img src="/img/doctor-gif.gif" alt="" srcset="" />
        </div>
        <div className="gif-info">
          <h2>Lorem ipsum dolor sit.</h2>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis id quidem deleniti
            consectetur atque itaque perspiciatis minus, doloremque sapiente nam deserunt eligendi quam maxime
            reprehenderit magni cumque recusandae, officia eum?
          </small>
        </div>
      </section>
      <section className='footer'>
        <img src="/img/down-load-app-bg.svg" />
        <div className="footer-info-left">
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
          <div className="download-cards">
            <div className="download-card">
              <p>Download our app!</p>
              <img src="/img/google-play.svg" alt="" />

            </div>
            <div className="download-card">
              <p>Download our app!</p>
              <img src="/img/app-store.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-logo">
          <img src="/img/icon.png" />
          <h3>U-Health</h3>
        </div>
        <div className="footer-middle">
          <hr />
          <div className="col-1">
            <b>Hotline </b><small> 8000000</small>
            <br />
            <b>Support </b><small>   email@realemail.net</small>
            <br />
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptas qui officia neque amet ut velit deleniti aperiam odio deserunt, possimus rerum reiciendis? Suscipit, minima ullam? Explicabo consequatur perspiciatis quisquam.</small>
          </div>
          <div className="col-2">
            <b>Services</b>
            <br />
            <small>Lorem, ipsum.</small>
            <br />
            <small>Lorem, ipsum.</small>
            <br />
            <small>Lorem, ipsum.</small>
          </div>
          <div className="col-2">
            <b>Contact</b>
            <br />
            <small>Lorem ipsum dolor sit.</small>
            <br />
            <small>dolor sit..</small>
            <br />
            <small>Lorem.</small>
          </div>
          <hr />
        </div>
      </footer>
    </div>
  )
}

export default App
