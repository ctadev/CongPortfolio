import './styles/app.scss'
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
