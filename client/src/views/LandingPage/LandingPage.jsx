import React from "react";
import "./LandingPage.css"; // Importa el archivo de estilos CSS
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Countries</h1>
      <h2>
        Las mas importantes, interesantes y curiosas actividades en los
        distintos paises del mundo
      </h2>
      <img
        src="/images/fondoCountries.jpg"
        alt="Background"
        className="background-image"
      />
      <Link to="/home" className="enter-button">
        Ingresar
      </Link>
      <h3>Proyecto Individual Soy Henry - Hernan Parino</h3>
    </div>
  );
}

export default LandingPage;
