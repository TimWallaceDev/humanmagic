import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { NavbarBootstrap } from './components/NavbarBootstrap/NavbarBootstrap'
import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Shows } from "./pages/Shows/Shows"
import {Live } from "./pages/Live/Live"
import { Team } from './pages/Team/Team'
import {Shop} from "./pages/Shop/Shop"
import { OurStory } from './pages/OurStory/OurStory'
import { Footer } from './components/Footer/Footer'



function App() {

  return (
    <>
      <HashRouter>
        <NavbarBootstrap />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/gallery" element={<Live />} />
          <Route path="/team" element={<Team />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
        <Footer/>
      </HashRouter>


    </>
  )
}

export default App
