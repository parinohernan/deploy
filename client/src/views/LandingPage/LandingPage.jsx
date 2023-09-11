import React from "react";
import "./LandingPage.css"; // Importa el archivo de estilos CSS
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <img
        src="/images/fondoCountries.jpg"
        alt="Background"
        className="background-image"
      />
      <div>
        <h2>¿Quieres vivir la experiencia HENRY COUNTRIES?</h2>
        <h2>Actividades turisticas, deportivas, eventos artisticos y mas.</h2>
      </div>
      <div>
        <Link to="/home" className="enter-button">
          Ingresar
        </Link>
      </div>
      <div>
        <h3>Proyecto Individual - School, Soy Henry - Alumno, Hernan Parino</h3>
      </div>
    </div>
  );
}

export default LandingPage;
