//import React, { useState, useEffect } from "react";
import style from "./ListaSelected.module.css";

const ListaSelected = (props) => {
  const { selectedCountries, allCountries } = props;

  // const handleItemClick = (id) => {
  //   //console.log("quiero cerrar el id",props.id);
  //   props.onClose(id); // Llama a la función onClose del componente padre  y pasa el ID como argumento
  // };

  return (
    <div className="divSelecciona">
      <p>Paises seleccionados:</p>
      {/*  <button>clear</button>limpia los paises seleccionados */}
      <div className={style.divSeleccionados}>
        {selectedCountries.map((selectedId) => (
          <div key={selectedId}>
            <div>
              <img
                className={style.pequeFlag}
                src={allCountries.find((pais) => pais.id === selectedId)?.flag}
                alt="flag"
              />
            </div>

            {/* {allCountries.find((pais) => pais.id === selectedId)?.name} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaSelected;
