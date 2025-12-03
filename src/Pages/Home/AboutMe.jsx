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
           <li>Born and raised in Germany, I currently live in London, UK.</li>
          </p>

           <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
           <li>I hold a Bachelor of Science degree in IT and have also completed a Software Development Coding Bootcamp.</li>
          </p>
    <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            
           <li>Coming from an IT support background, I discovered my passion for coding and instantly fell in love with the process of turning ideas into meaningful software solutions.</li>
          </p>


          <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
          <li>I specialize in full-stack development, creating robust backends and intuitive and a user-focused frontends..</li>
          </p>
         

            <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
          <li>That passion inspired me to transition my career into software development—and I haven’t looked back since. 😊</li>
          </p>

          

             <p
            className="hero--section-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Let's get connected!
          </p>

        </div>
      </div>
    </section>
  );
}
