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
      gitLink: "https://github.com/OmadbekXusanboyev/MARVEL",
      projectLink: "https://marvel-movies-loyiha.netlify.app/",
    },
    {
      imgSrc: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/cea245ebbb8eba9cc81b117bc73bf132c0784783",
      title: "Pesto restaurant",
      tags: ["#Html", "#CSS", "#Javascript"],
      gitLink: "https://github.com/OmadbekXusanboyev/PESTO-Restorant",
      projectLink: "https://pesto-restorant.netlify.app/",
    },
    {
      imgSrc: "/public/image/project-3.png",
      title: "Jarvis voice assistant",
      tags: ["#Html", "#CSS", "#Javascript"],
      gitLink: "https://github.com/OmadbekXusanboyev/JARVIS-Voice-Assisent",
      projectLink: "https://jarvis-voice-assisent.netlify.app/",
    },
    {
      imgSrc: "/public/image/project-4.png",
      title: "Music player",
      tags: ["#Html", "#CSS", "#Javascript"],
      gitLink: "https://github.com/OmadbekXusanboyev/Music-player",
      projectLink: "https://music-player-07.netlify.app/",
    },
    {
      imgSrc: "/public/image/macbook.png",
      title: "Macbook & AirPods",
      tags: ["#React js"],
      gitLink: "https://github.com/OmadbekXusanboyev/MacBook-Airpods",
      projectLink: "https://macbook-airpods.netlify.app/",
    },
    {
      imgSrc: "/public/image/project-6.png",
      title: "BuildCon",
      tags: ["#Html", "#CSS","#Bootstrap"],
      gitLink: "https://github.com/OmadbekXusanboyev/BuildCon",
      projectLink: "https://buildcon-bootstrap.netlify.app/",
    },
  ];

  return (
    <div>
      <section id="work" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My Portfolio hightlights</h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(
              ({ imgSrc, title, tags, gitLink  , projectLink }, key) => 
               <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                gitLink={gitLink}
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
