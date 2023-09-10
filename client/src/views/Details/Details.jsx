import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetail } from "../../redux/action";
import CountryDetail from "../../components/CountryDetail/CountryDetail";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [id, dispatch]);

  const countryDetail = useSelector((state) => state.detail);

  return (
    <div className={styles.divCountryDetails}>
      <div className={styles.divDetailConuntry}>
        <CountryDetail country={countryDetail} />
      </div>
      <div className={styles.divDetailActivity}>
        <div className={styles.divActividades}>
          <h2 className={styles.h2}>Actividades Turísticas</h2>
          {countryDetail.Activities && countryDetail.Activities.length > 0 ? (
            countryDetail.Activities.map((actividad, index) => (
              <div key={index} className={styles.divUnaActividad}>
                <div className={styles.divUnaActividad}>
                  <p>Nombre: {actividad.nombre}</p>
                  <p>Dificultad: {actividad.dificultad}</p>
                  <p>Duración: {actividad.duracion}</p>
                  <p>Temporada: {actividad.temporada}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.divNingunaActividad}>
              <h3>Lo siento, todavía no tenemos actividades en este país.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
