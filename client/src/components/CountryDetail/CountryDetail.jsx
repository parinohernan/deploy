import React from "react";
import style from "./CountryDetail.module.css";

const CountryDetail = (props) => {
  const { country } = props;

  console.log("countri", country);
  return (
    <div className={style.divDetails}>
      <div className={style.divTexto}>
        <h2>{country.name}</h2>
      </div>
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <div className={style.divTexto}>
        <p>
          <strong>ID:</strong> {country.id}
        </p>
        <p>
          <strong>Continente:</strong> {country.continents}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Subregión:</strong> {country.subregion}
        </p>
        <p>
          <strong>Área:</strong> {country.area}
        </p>
        <p>
          <strong>Población:</strong> {country.population}
        </p>
      </div>
    </div>
  );
};

export default CountryDetail;
