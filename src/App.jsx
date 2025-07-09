import './App.css'
import CircleButton from './components/CircleButton'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Toast from './components/Toast'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Project'
import Skills from './sections/Skills'

function App() {

  return (
    <>
      <Toast />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <CircleButton />
    </>
  )
}

export default App
