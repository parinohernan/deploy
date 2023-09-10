import React from "react";
import style from "./About.module.css";
import AccordionItem from "./AcordionItem";

function About() {
  return (
    <div className="cabecera">
      <div class={style.contenedor}>
        <h1>PROYECTO INDIVIDUAL COUNTRIES</h1>
      </div>
      <AccordionItem />
      <div className={style.aboutMeContainer}>
        <p>
          Puedes contactarme para brindar tu feedback acerca de esta pagina.
        </p>
        <p>
          <a
            className={style.link}
            href="https://www.linkedin.com/in/parinohernan/"
            target="_blank"
            rel="noreferrer"
          >
            My Linkedin
          </a>
        </p>
        <p>
          <a
            className={style.link}
            href="https://github.com/parinohernan/cr-pi-countries-main.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repositore
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
