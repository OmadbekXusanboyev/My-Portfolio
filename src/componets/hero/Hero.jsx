/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */

import { ButtonOutline, ButtonPrimary } from "../button/Button";

function Hero() {
  return (
    <div>
      <section className="pt-24 lg:pt-30" id="home">

        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  width={40}
                  height={40}
                  className="img-cover"
                  src="./sity mall.jpg"
                  alt="portrait"
                />
              </figure>
              <div className="flex items-center gap-1.5 text-zinc-500 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for the Future
            </h2>

            <div className="flex items-center gap-3">
               <ButtonPrimary 
               label="Download CV"
               icon="download" />
               
               <ButtonOutline 
               href="#about"
               label="Scroll down"
               icon="arrow_downward"
               />
               </div>
          </div>

          <div className="hidden lg:block">
               <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-sky-40/40 to-65% rounded-[40px] overflow-hidden">
                    <img 
                    width={656}
                    height={800}
                    src="./image/me-2.png" 
                    alt="" 
                    className="me-img w-full" />
               </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;