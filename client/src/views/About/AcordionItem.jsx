import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2>Este proyecto</h2>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>
            El proyecto <b> HENRY COUNTRIES</b>, es un trabajo individual del
            bootcamp FULLSTACK de{" "}
            <a href="https://www.soyhenry.com/"> SOYHENRY</a>. Se trata de una
            pagina web que muestra los datos principales de los distintos paises
            del mundo. Para hacerlo utiliza su propio servidor
            <a href="https://nodejs.org/en"> NODE JS </a>api rest conectado a su
            propia base de datos. En primer lugar el SERVIDOR EXPRESS obtiene
            los datos de una appi json brindada por Henry, esos datos son
            fintrados y transformados, guardandolos en la base de datos
            <a href="https://www.postgresql.org/"> POSTGRESSQL</a> adaptados al
            tipo y forma que necesita nuestro HENRY COUNTRIES. Este SERVIDOR
            EXPRESS recibe las distintas peticiones desde el frontend y manipula
            las tablas de la BDD utilizando
            <a href="https://sequelize.org/"> SEQUELIZE</a>. Las distintas
            peticiones fueron testeadas usando
            <a href="https://www.postman.com/"> POSTMAN</a>. HENRY COUNTRIES es
            el nombre que le di a mi frontend. Se encuentra mayormente
            programado utilizando la libreria
            <a href="https://react.dev/"> REACT JS</a>, todas las peticiones al
            backend las realiza desde
            <a href="https://redux.js.org/"> REDUX JS</a>. El diseño simple y
            sus colores es en parte un homenaje a la plataforma de SOY HENRY.
          </p>
        </div>
      )}
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion2}
      >
        <h2>Uso y funcionalidades</h2>
      </div>
      {isOpen2 && (
        <div className="accordion-content">
          <p>
            Al ingresar nos encontramos con una breve landingpage que el el
            portal a nuestra aplicación web. La página principal nos renderiza
            la capa de HOME. Sobre la navbar renderiza un imput de búsqueda para
            buscar países por su nombre o parte de él. Home cuenta con un
            paginado donde se muestran tarjetas de 10 países por página. Permite
            navegar en las distintas páginas utilizando de los botones siguiente
            y anterior. Sobre la derecha de la pantalla se encuentran los
            filtros y ordenamiento. Cada tarjeta en un link al detalle del país.
            Donde se muestran los datos de cada país y la información de
            actividades si es que existen actividades asociadas a ese país. La
            sección Crear Actividad en el navbar nos permite crear actividades y
            asociarla a distintos paises. Te invito a cargar esa actividad
            turística que deseas realizar, Ojala logres realizarla. La mía es
            ver la final de la UEFA Champions League. En cuanto a la sección
            About es donde usted se encuentra, es donde comparto la información
            sobre el proyecto y sobre mí.
          </p>
        </div>
      )}
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion3}
      >
        <h2>Sobre mi</h2>
      </div>
      {isOpen3 && (
        <div className="accordion-content">
          <p>
            ¡Hola! Soy Hernán Parino, y me encantaría compartir un poco sobre
            mí: <br /> Soy una persona apasionada y dedicada, siempre en busca
            de nuevas oportunidades y desafíos. Mi motivación principal en la
            vida es luchar y esforzarme por alcanzar mis sueños, y lo hago con
            la intención de brindar lo mejor de mí para mi familia, amigos y
            seres queridos. <br /> En el ámbito profesional, tengo un profundo
            interés en el desarrollo de software, una pasión que ha estado
            conmigo desde mis años universitarios. Aunque no tengo experiencia
            formal en el campo, he tenido la oportunidad de colaborar en la
            migración de sistemas de gestión en varias empresas y proporcionar
            apoyo constante durante su uso diario. <br /> Este año 2023, decidí
            dar un paso audaz y motivado por la posibilidad de estudiar en
            línea, me inscribí en el bootcamp de desarrollador fullstack de Soy
            Henry. Durante este emocionante viaje, me sentí siempre muy a gusto,
            a pesar de la intensidad y la presión que conlleva. Estoy orgulloso
            de los logros que he alcanzado en este bootcamp, incluyendo la
            construcción de sólidas amistades y el desarrollo de habilidades de
            alta calidad que me preparan para los desafíos del mundo del
            desarrollo de software. Este nuevo capítulo en mi carrera representa
            una emocionante oportunidad de crecimiento y aprendizaje constante,
            y estoy ansioso por lo que el futuro me depara. <br /> Cuando no
            estoy inmerso en el mundo del código, me sumerjo en otros intereses,
            como el ajedrez y el fútbol, que me permiten relajarme y disfrutar
            de mi tiempo libre. Siempre he creído en la importancia de mantener
            un equilibrio saludable entre mi vida profesional y personal. <br />
            Lo que realmente me impulsa es la idea de seguir aprendiendo y
            creciendo en el campo de la programación. Disfruto colaborar con
            personas que comparten esta misma pasión por el crecimiento personal
            y profesional. Si estás interesado.
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
