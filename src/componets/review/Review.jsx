/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);


import ReviewCard from "./ReviewCard";

const Review = () => {

  useGSAP(()=>{
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: "-200% 10%",
        end: "400% 50%",
        scrub: true,
      },
      x: "-1000"
    })
  })



  const reviews = [
    {
      content:
        "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
      name: "Ethan Caldwell",
      imgSrc: "/public/people-1.jpg",
      company: "NexaWave",
    },
    {
     content:
       "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
     name: "Ethan Caldwell",
     imgSrc: "/public/people-3.jpg",
     company: "NexaWave",
   },
    {
      content:
        "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
      name: "Ava Thompson",
      imgSrc: "/public/people-4.jpg",
      company: "TechMosaic",
    },
    {
      content:
        "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
      name: "Jonathan",
      imgSrc: "/public/people-5.jpg",
      company: "Skyline Digital",
    },
  ];

  return (
    <div>
      <section className="section overflow-hidden" id="reviews">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>

          <div className="scrub-slide flex items-stretch gap-3 w-fit">
            {reviews.map(
              ({ content, name, imgSrc, company }, key) => 
               <ReviewCard
                 key={key}
                 content={content}
                 name={name}
                 imgSrc={imgSrc}
                 company={company}
               />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
