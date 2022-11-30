import Navigation from './components/Navigation'
import Overlay from './components/Bits/Overlay'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import FrontEnd from './components/FrontEnd'
import BackEnd from './components/BackEnd'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  function goto__projects(){
    console.log('hello')
    var goto__ = document.getElementById('projects')
    goto__.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }
  return (
    <div className="App">
      <Navigation goto__projects={goto__projects}/>
      <Overlay />
      <Jumbotron goto__projects={goto__projects}/>
      <About />
      <FrontEnd />
      <BackEnd />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
