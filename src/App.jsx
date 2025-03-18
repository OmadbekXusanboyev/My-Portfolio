import { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import About from './componets/about/About';
import Contact from './componets/contact/Contact';
import Footer from './componets/footer/Footer';
import Header from './componets/header/Header';
import Hero from './componets/hero/Hero';
import Review from './componets/review/Review';
import Skill from './componets/skill/Skill';
import Work from './componets/work/Work';
import welcomeGif from '/public/image/welcome.gif';

function App() {
  const [loading, setLoading] = useState(true);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const audio = new Audio('/public/image/audio2.mp3');

    const playAudio = () => {
      if (!audioPlayed) {
        audio.play().then(() => {
          setAudioPlayed(true);
        }).catch(error => console.log("Audio play error:", error));
      }
    };

    window.addEventListener('mousemove', playAudio, { once: true });
    window.addEventListener('scroll', playAudio, { once: true });
    window.addEventListener('click', playAudio, { once: true });

    const timer = setTimeout(() => setLoading(false), 6000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', playAudio);
      window.removeEventListener('scroll', playAudio);
      window.removeEventListener('click', playAudio);
    };
  }, [audioPlayed]);

  useGSAP(() => {
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
      });
    });
  });

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
        flexDirection: 'column'
      }}>
        <img src={welcomeGif} alt="Welcome" style={{ width: '500px' }} />
      </div>
    );
  }

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
