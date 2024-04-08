import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { NavbarBootstrap } from './components/NavbarBootstrap/NavbarBootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Shows } from "./pages/Shows/Shows"
import {Live } from "./pages/Live/Live"
import { Team } from './pages/Team/Team'
import {Shop} from "./pages/Shop/Shop"
import { OurStory } from './pages/OurStory/OurStory'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarBootstrap />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/live-footage" element={<Live />} />
          <Route path="/team" element={<Team />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
