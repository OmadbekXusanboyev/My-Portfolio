/**
 * @copyright 2024 OmadCoder
 * @license Apache-2.0
 */

function About() {
  const aboutItems = [
    {
      label: "Project done",
      number: 35,
    },
    {
      label: "Years of experiencs",
      number: 1.5,
    },
  ];

  return (
    <section id="about" 
          className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p 
          className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            "Hello! I'm Omadbek, a recent graduate of a Frontend course with
            several years of experience in web development. My passion for
            website creation drives me to design beautiful and functional user
            interfaces. Now, I'm eager to apply my knowledge and strive to
            create modern and efficient websites."
          </p>

          <div className="flex flex-wrap items-end gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold mdLtext-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <h1 className="select-none text-2xl ml-auto md:w-[140px]">
              Omad<span className="text-orange-600">Coder</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
