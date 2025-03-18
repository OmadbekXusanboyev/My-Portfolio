import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import About from "./componets/about/About";
import Contact from "./componets/contact/Contact";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";
import Review from "./componets/review/Review";
import Skill from "./componets/skill/Skill";
import Work from "./componets/work/Work";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (!audioPlayed) {
        const audio = new Audio("./image/audio2.mp3");
        audio.play().catch((err) => console.log("Audio playback blocked:", err));
        setAudioPlayed(true);
        document.removeEventListener("click", handleClick);
      }
    };

    document.addEventListener("click", handleClick, { once: true });

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [audioPlayed]);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      {loading && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
          <img src="./image/welcome.gif" alt="Welcome to my Portfolio" className="w-[600px] h-auto" />
        </div>
      )}

      <div className={loading ? "hidden" : "block"}>
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
      </div>
    </ReactLenis>
  );
}

export default App;
