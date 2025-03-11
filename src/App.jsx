/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */


import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);


import About from './componets/about/About'
import Contact from './componets/contact/Contact'
import Footer from './componets/footer/Footer'
import Header from './componets/header/Header'
import Hero from './componets/hero/Hero'
import Review from './componets/review/Review'
import Skill from './componets/skill/Skill'
import Work from './componets/work/Work'

function App() {

  useGSAP(()=>{
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })


  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Review/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App
