
import './App.css'

import {Hero} from './Sections/Hero'
import { Nav } from './components/nav'
import { About } from './Sections/About'
import {Footer} from './Sections/Footer'

function App() {
  
  return (
    <>
    <Nav/>
     <Hero></Hero>
     <About></About>
     <Footer></Footer>
    </>
  )
}

export default App
