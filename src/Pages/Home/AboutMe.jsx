export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="about--section"
      data-aos="fade-up"
    >
      <div
        className="about--section--img"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img src="./img/sunny.jpg" alt="About Me" />
      </div>

      <div
        className="hero--section--content--box about--section--box"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="hero--section--content">
          <h2
            className="skills-section--heading"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            ABOUT ME
          </h2>

           <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
           <li>I'm Nadir Ahmed, a software developer based in London, UK, originally from Germany.</li>
          </p>

            <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
           <li>I build responsive web applications using React, TypeScript, JavaScript, and PHP, with a strong focus on clean user interfaces and reliable backend performance.</li>
          </p>

           <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >  
           <li>With a background in IT support, a BSc in IT, and a coding bootcamp, I discovered my passion for coding and turning ideas into meaningful software — and I haven't looked back since.</li>
          </p>

            <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
          <li>I enjoy solving real-world problems through code and continuously improving my skills to build better software. Let's get connected and build something amazing together 😊</li>
          </p>


        </div>
      </div>
    </section>
  );
}
