/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

function Skill() {
  const skillItem = [
    {
      imgSrc: "/public/image/figma.svg",
      label: "Figma",
      desc: "Design tool",
    },
    {
      imgSrc: "/public/image/css3.svg",
      label: "CSS",
      desc: "User Interface",
    },
    {
     imgSrc: "/public/image/tailwindcss.svg",
     label: "TailwindCSS",
     desc: "User Interface",
    },
    {
     imgSrc: "https://cdn.iconscout.com/icon/free/png-256/free-bootstrap-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-1-pack-logos-icons-3029888.png?f=webp",
     label: "Bootstrap",
     desc: "User Interface",
   },
    {
      imgSrc: "/public/image/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "/public/image/react.svg",
      label: "React",
      desc: "Framework",
    },
    {
     imgSrc: "https://www.gstatic.com/devrel-devsite/prod/v1d4a4bce9a6f1ad12c0dbb886d406b5bcfdf3882f3026512eb5f609d55157b5b/firebase/images/touchicon-180.png",
     label: "FireBase",
     desc: "Database",
   },
   {
     imgSrc: "https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png",
     label: "GitHub",
     desc: "Version Control",
   },
    
    
  ];

  return (
    <div>
      <section id="skills" className="section">
        <div className="container">
          <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

          <p className="text-zinc-400 mt-3 mb-8 ,ax-w-[50ch]">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing website & applications.
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            {skillItem.map(({ imgSrc, label, desc }, key) => 
               <SkillCard
               key={key}
               imgSrc={imgSrc}
               label={label}
               desc={desc}
               classes="reveal-up"
               />
               )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;