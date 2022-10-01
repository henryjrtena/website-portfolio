import Navigation from './components/Navigation'
import Overlay from './components/Bits/Overlay'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import FrontEnd from './components/FrontEnd'
import BackEnd from './components/BackEnd'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Overlay />
      <Jumbotron />
      <About />
      <FrontEnd />
      <BackEnd />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
