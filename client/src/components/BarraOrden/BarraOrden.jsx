import React, { useState } from "react";
import style from "./BarraOrden.module.css";
import { useDispatch, useSelector } from "react-redux";

import { orderByPopulation, orderByArea } from "../../redux/action";

const BarraOrden = () => {
  const [ordenTamaño, setOrdenTamaño] = useState("Aleatorio");
  const error = useSelector((state) => state.error);
  const [ordenPoblacion, setOrdenPoblacion] = useState("Aleatorio");

  const dispatch = useDispatch();

  const handlePoblacionOnClick = (event) => {
    setOrdenTamaño("aleatorio");
    if (ordenPoblacion === "Descendente") {
      setOrdenPoblacion("Ascendente");
      dispatch(orderByPopulation("Ascendente"));
    } else {
      setOrdenPoblacion("Descendente");
      dispatch(orderByPopulation("Descendente"));
    }
    // console.log("popul", ordenPoblacion);
  };

  const handleTamañoOnClick = (event) => {
    setOrdenPoblacion("aleatorio");
    if (ordenTamaño === "Descendente") {
      setOrdenTamaño("Ascendente");
      dispatch(orderByArea("Ascendente"));
    } else {
      setOrdenTamaño("Descendente");
      dispatch(orderByArea("Descendente"));
    }
    // console.log("tamañ", ordenTamaño); //tiene una demora el estado no alcanza a reflejarse
  };
  if (!error) {
    return (
      <div className={style.divOrdenContainer}>
        {/* <div>
          <h2>orden</h2>
        </div> */}

        <div className={style.divOrdenContinente}>
          <div>
            <h3 className={style.h3Order}>
              Ordenar poblacion {ordenPoblacion.toLocaleLowerCase()}:
            </h3>
            <button onClick={handlePoblacionOnClick}>↹</button>
          </div>
        </div>

        <div className={style.divOrdenActividad}>
          <div>
            <h3 className={style.h3Order}>
              Orden por tamaño {ordenTamaño.toLocaleLowerCase()}:
            </h3>
            <button onClick={handleTamañoOnClick}>↹</button>
          </div>
        </div>
      </div>
    );
  }
};

export default BarraOrden;
