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
                  loading="lazy"
                  width={40}
                  height={40}
                  className="img-cover"
                  src="./image/sity-mall.jpg"
                  alt="portrait"
                />
              </figure>
              <div className="flex items-center gap-1.5 text-zinc-500 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-green-500">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                </span>
                Available for work
              </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for the Future
            </h2>

            <div className="flex items-center gap-3">
               <ButtonPrimary 
               href="./image/My Resume.pdf"
               label="Download CV"
               icon="download" />
               
               <ButtonOutline 
               href="#about"
               label="Scroll down"
               icon="arrow_downward"
               />
               </div>
          </div>

          <div className="">
               <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-orange-600 via-sky-20/40 to-65% rounded-[40px] overflow-hidden">
                    <img 
                    loading="lazy"
                    width={656}
                    height={800}
                    src="./image/me-2.png" 
                    alt="Here's a picture!" 
                    className="me-img w-full" />
               </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
