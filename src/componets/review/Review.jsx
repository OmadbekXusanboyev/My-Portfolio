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
      content: 'Great developer! Writes clean code, I give it 5 stars.',
      name: 'Rahmatulloh A',
      imgSrc: '/public/image/people-2.jpg',
      company: 'Marketolog'
    },
    {
      content: 'Wu has a better experience than my most active reader.',
      name: 'Abbosbek Q',
      imgSrc: '/public/image/people-1.jpg',
      company: 'Frontend Developer'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ilhomjon I',
      imgSrc: '/public/image/people-3.jpg',
      company: 'Android Developer'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'MuhammadAmin N',
      imgSrc: '/public/image/people-4.jpg',
      company: 'Managing Director'
    },
    {
      content: 'Professional work! With a polished design and smooth user experience. Taught me a lot.',
      name: 'Ziyovuddin T',
      imgSrc: '/public/image/people-5.jpg',
      company: 'Frontend Developer'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'MuhammadAmin',
      imgSrc: '/public/image/people-6.jpg',
      company: 'Frontend Developer'
    }
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
