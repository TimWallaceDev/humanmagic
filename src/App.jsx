import { useState } from 'react'
import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { NavbarBootstrap } from './components/NavbarBootstrap/NavbarBootstrap'
import { Album } from './components/Album/Album'
//import album covers
import brightness from "./assets/images/brightness.png"
import coldBlooded from "./assets/images/coldblooded-min.png"
import colorfulOverjoy from "./assets/images/COfront3-min.png"
import myBrother from "./assets/images/mybrotherart-min.jpg"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarBootstrap />
      
      {/* brightness */}
      <Album album={{ name: "Brightness", date: "3.17.2023 RELEASE", link: "https://distrokid.com/hyperfollow/humanmagic1/brightness", tracks:["Brightness", "Brightness - Radio Edit"], cover: brightness}} />

      {/* cold blooded */}
      <Album album={{ name: "Cold Blooded", date: "10.26.2022 RELEASE", link: "https://open.spotify.com/track/0JuTZroVEK0ufJmRQFvhFh?si=e7c36788909642c0", tracks:["Cold Blooded"], cover: coldBlooded}} />

      {/* Colorful Overjoy */}
      <Album album={{ name: "Colorful // Overjoy", date: "11.27.2021 RELEASE", link: "https://open.spotify.com/album/2QU32KgZxaorhRjUVnQ0nz?si=USSTsHuEQAy3GT6q9mNUeg", tracks:["Colorful", "overjoy", "the magnetic wave", "it's our magic", "thank god for you"], cover: colorfulOverjoy}} />

      {/* My Brother */}
      <Album album={{ name: "My Brother", date: "11.27.2021 RELEASE", link: "https://open.spotify.com/album/2QU32KgZxaorhRjUVnQ0nz?si=USSTsHuEQAy3GT6q9mNUeg", tracks:["my brother pt.1", "my brother pt.2"], cover: myBrother}} />
    </>
  )
}

export default App
