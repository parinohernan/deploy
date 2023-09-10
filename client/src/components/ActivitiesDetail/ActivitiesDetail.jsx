import React from "react";
import style from "./ActivitiesDetail.module.css";

const ActivitiesDetail = (props) => {
  const { country } = props;
  const actividades = country.Activities;

  return (
    <div className={style.divActividades}>
      <h2 className={style.h2}>Actividades Turísticas</h2>
      {actividades.map((actividad, index) => (
        <div key={index} className={style.divUnaActividad}>
          <div className={style.divUnaActividad}>
            <p>Nombre: {actividad.nombre}</p>
            <p>Dificultad: {actividad.dificultad}</p>
            <p>Duración: {actividad.duracion}</p>
            <p>Temporada: {actividad.temporada}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesDetail;
