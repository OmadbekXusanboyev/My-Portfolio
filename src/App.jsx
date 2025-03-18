import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

import About from "./componets/about/About";
import Contact from "./componets/contact/Contact";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";
import Review from "./componets/review/Review";
import Skill from "./componets/skill/Skill";
import Work from "./componets/work/Work";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleClick = () => {
      if (!audioPlayed) {
        const audio = new Audio("/image/audio2.mp3");
        audio.play().catch((err) => console.log("Audio playback blocked:", err));
        setAudioPlayed(true);
      }
    };

    document.addEventListener("click", handleClick, { once: true });

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";

        // 🔄 Lenis va GSAP uchun fix
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event("resize")); // Lenisni yangilash uchun

      }, 800);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, [audioPlayed]);

  // 🔄 Review sektsiyasini qayta yuklash
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event("resize"));
      }, 800);
    }
  }, [loading]);

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
          className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src="/image/welcome.gif" alt="Loading..." className="w-400 h-auto" />
          <p className="absolute bottom-10 text-white text-sm">Ekranga bosib ovozni yoqing</p>
        </div>
      )}

      <div className={loading ? "hidden" : "block"}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Review /> {/* 🟢 Review ishlashi uchun refresh qo‘shildi */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
