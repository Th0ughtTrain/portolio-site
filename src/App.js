import { useRef } from 'react';
import { forwardRef } from 'react';
import logo from './logo.svg';
import './App.scss';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {

  const navObject = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    navSection: useRef(null)
  }

  return (
    <div className="App">
      <Hero sectionNav={navObject}></Hero>
      <NavBar sectionNav={navObject}></NavBar>
      <About sectionNav={navObject}></About>
      <Projects sectionNav={navObject} ></Projects>
      <Contact sectionNav={navObject} ></Contact>
    </div>
  );
}

export default App;
