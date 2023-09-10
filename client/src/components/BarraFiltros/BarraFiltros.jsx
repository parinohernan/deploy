import React, { useState } from "react";
import style from "./BarraFiltros.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  // filterPaisByName,
  filterContinente,
  filterActividad,
} from "../../redux/action";

const BarraFiltros = () => {
  const continentes = [
    "Todos",
    "South America",
    "Europe",
    "Asia",
    "Oceania",
    "Antarctica",
    "Africa",
    "North America",
  ];

  const countries = useSelector((state) => state.countries);
  const error = useSelector((state) => state.error);

  const allActivities = ["Todas"];

  const obtenerAllActivities = countries.map((country) => {
    if (country.Activities && country.Activities.length !== 0) {
      for (let i = 0; i < country.Activities.length; i++) {
        const element = country.Activities[i];
        allActivities.push(element.nombre);
      }
    }
  });

  // Utilizar un Set para eliminar duplicados
  const set = new Set(allActivities);
  const array2 = [...set];

  const actividades = array2;

  const [selectedContinente, setSelectedContinente] = useState("Todos");

  const [selectedActividad, setSelectedActividad] = useState("Todas");

  const dispatch = useDispatch();

  const handleContinenteChange = (event) => {
    const value = event.target.value;
    setSelectedContinente(value);
    dispatch(filterContinente(value));
  };

  const handleActividadChange = (event) => {
    const value = event.target.value;
    setSelectedActividad(value);
    dispatch(filterActividad(value));
  };

  if (!error) {
    return (
      <div className={style.divFitrosContainer}>
        {/* <div>
          <h2>Filtro</h2>
        </div> */}

        <div className={style.divFitrosContinente}>
          <div>
            <label>Continente:</label>
          </div>
          <select value={selectedContinente} onChange={handleContinenteChange}>
            {continentes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={style.divFitrosActividad}>
          <div>
            <label>Actividad:</label>
          </div>
          <select value={selectedActividad} onChange={handleActividadChange}>
            {actividades.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div> //divFiltrosContainer
    );
  }
};

export default BarraFiltros;
