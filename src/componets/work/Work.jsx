/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/public/image/project-1.png",
      title: "Marvel",
      tags: ["#Html", "#CSS", "#Javascript"],
      projectLink: "https://github.com/OmadbekXusanboyev/MARVEL",
    },
    {
      imgSrc: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/cea245ebbb8eba9cc81b117bc73bf132c0784783",
      title: "Pesto restaurant",
      tags: ["#Html", "#CSS", "#Javascript"],
      projectLink: "https://github.com/OmadbekXusanboyev/PESTO-Restorant",
    },
    {
      imgSrc: "/public/image/project-3.png",
      title: "Jarvis voice assistant",
      tags: ["#Html", "#CSS", "#Javascript"],
      projectLink: "https://github.com/OmadbekXusanboyev/JARVIS-Voice-Assisent",
    },
    {
      imgSrc: "/public/image/project-4.png",
      title: "Music player",
      tags: ["#Html", "#CSS", "#Javascript"],
      projectLink: "https://github.com/OmadbekXusanboyev/Music-player",
    },
    {
      imgSrc: "/public/image/macbook.png",
      title: "Macbook & AirPods",
      tags: ["#React js"],
      projectLink: "https://github.com/OmadbekXusanboyev/MacBook-Airpods",
    },
    {
      imgSrc: "/public/image/project-6.png",
      title: "BuildCon",
      tags: ["#Html", "#CSS","#Bootstrap"],
      projectLink: "https://github.com/OmadbekXusanboyev/BuildCon",
    },
  ];

  return (
    <div>
      <section id="work" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My Portfolio hightlights</h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(
              ({ imgSrc, title, tags, projectLink }, key) => 
               <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
               />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
