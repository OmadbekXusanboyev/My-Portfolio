/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({
     imgSrc,
     title,
     tags,
     projectLink,
     gitLink,
     classes
}) => {
     return (
          <div>
               <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
                    <figure className="img-box aspect-square rounded-lg mb-4">
                         <img
                              src={imgSrc}
                              width={200}
                              height={400}
                              loading="lazy"
                              alt={title}
                              className="img-cover-img" />
                    </figure>

                    <div className="flex items-center justify-between gap-4">
                         <div>
                              <h3 className="title-1 mb-3">
                                   {title}
                              </h3>

                              <div className="flex flex-wrap items-center gap-2">
                                   {tags.map((label, key) => (
                                        <span
                                             key={key}
                                             className="h-8 text-sm font-medium text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded">
                                             {label}
                                        </span>
                                   ))}
                              </div>
                         </div>

                         {gitLink && (
                              <a
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   href={gitLink}
                                   className="w-11 h-11 rounded-lg grid place-items-center bg-orange-600 text-zinc-950 shrink-0 z-10"
                                   style={{ position: "relative" }}
                              >
                                   <img
                                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                        alt="GitHub"
                                        className="w-6 h-6"
                                   />
                              </a>
                         )}
                    </div>

                    {projectLink && (
                         <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={projectLink}
                              className="absolute inset-0"
                              aria-label={`Open ${title} project`}
                              style={{ zIndex: 1 }}
                         ></a>
                    )}
               </div>
          </div>
     );
};

ProjectCard.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     tags: PropTypes.arrayOf(PropTypes.string).isRequired,
     projectLink: PropTypes.string,
     gitLink: PropTypes.string,
     classes: PropTypes.string
};

export default ProjectCard;
