/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../button/Button";

const Footer = () => {
  const sitemap = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Reviews",
      href: "#reviews",
    },
    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/OmadbekXusanboyev",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/xusanboyev-omadbek",
    },
    {
      label: "Twitter X",
      href: "https://x.com/OmadCoder",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/omad_coder_07?igsh=MXAxM2R6Y2hpNG54YQ==",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="section">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                Let&apos;s work together today!
              </h2>

              <ButtonPrimary
                href="mailto:xusanboyev03@inbox.ru"
                label="Get in touch"
                icon="chevron_right"
                classes="reveal-up"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2 reveal-up">Sitemap</p>

                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 reveal-up">Socials</p>

                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-10 pt-10 mb-8">
            <a href="/" className="reveal-up">
              <h1>
                <a href="/" className="logo text-2xl">
                  Omad<span className="text-orange-600">Coder</span>
                </a>
              </h1>
            </a>

            <p className="text-sm text-zinc-400 select-none reveal-up">
              © 2024 Omad<span className="text-orange-600">Coder</span>. All
              rights reserved.
            </p>
          </div>
        </div>

        <section className="section-top relative ">
        <div className="top-btn absolute bottom-[130px] right-[30px] sm:right-[30px] cursor-pointer" onClick={scrollToTop}>
          <img className="w-[50px] :w-[30px] p-1 rounded-lg bg-[#302f30]" src="./image/Animation - top.gif" alt="Scroll to top" />
        </div>
      </section>


      </footer>
    </div>
  );
};

export default Footer;
