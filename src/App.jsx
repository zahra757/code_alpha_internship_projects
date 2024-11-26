// import React from 'react'
// import Navbar from './Components/Navbar'
// import AboutMe from './Screens/AboutMe'
// import Services from './Screens/Services'
// import Skills from './Screens/Skills'
// import Projects from './Screens/Projects'
// import Contact from './Screens/Contact'

// import { HashLink as Link } from 'react-router-hash-link'
// import { BrowserRouter } from 'react-router-dom'
// export default function App() {
//   return (
//     <div>

//   <Navbar/>
//       <h3 className='main_title'>My Portfolio</h3>
//        <AboutMe/>
//       <Services/>
//       <Skills/>
//       <Projects/>
//       <Contact/>
     
    
//     </div>
//   )
// }
import React from 'react';
import Navbar from './Components/Navbar';
import AboutMe from './Screens/AboutMe';
import Services from './Screens/Services';
import Skills from './Screens/Skills';
import Projects from './Screens/Projects';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import Footer from './Components/Footer';
export default function App() {
  return (
    <div>
      <Navbar />
      <div id="HOME">
        <Home />
      </div>
      {/* <h3 className="main_title text-center mt-[15rem]">My Portfolio</h3> */}
      <div id="ABOUTME">
        <AboutMe />
      </div>
      <div id="SERVICES">
        <Services />
      </div>
      <div id="SKILLS">
        <Skills />
      </div>
      <div id="PROJECTS">
        <Projects />
      </div>
      <div id="CONTACT">
        <Contact />
      </div>
      <div id='FOOTER'>
        <Footer/>
      </div>
    </div>
  )
}
