import CustomCursor from "../components/CustomCursor"
import Heading from "../components/Heading"
import HeadingMobile from "../components/HeadingMobile"
import LinksDesktop from "../components/LinksDesktop"
import LinksGrid from "../components/LinksGrid"
import { useState, useEffect } from "react"


export default function Home() {
  const [isDark, setDark] = useState(false)

  function toggleColor() {
    let toggler = document.getElementById('toggler')
    let darkMode = document.getElementById('darkmode')

    toggler.classList.toggle('active')    
    darkMode.classList.toggle('active')    

    setDark(!isDark)
  }

  return (
  <div className="h-screen overflow-hidden overflow-y-hidden max-w-screen">
    <div>
        <div id="toggler" className="toggler" onClick={toggleColor}></div>
        <div id="container" className="container">
          <div id="darkmode" className="darkmode"></div>
        </div>
    </div>

    <Heading />
    <HeadingMobile />

    <LinksDesktop  />
    <LinksGrid />

    <CustomCursor dark={isDark} />
  </div>
  )
}
