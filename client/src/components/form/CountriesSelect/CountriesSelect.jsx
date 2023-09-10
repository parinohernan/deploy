import React, { useState } from "react";
import { setSelectedCountries } from "../../../redux/action";
import style from "./CountriesSelect.module.css";
import ListaSelected from "../ListaSelected/ListaSelected";
import { useDispatch, useSelector } from "react-redux";

const CountrySelect = () => {
  // antes tenia esto { onSelectCountry } traigo la el handlecountriesselec  para agregar los paises al estado local de  form
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  const selectedCountries = useSelector((state) => state.selectedCountries);

  const handleCountrySelect = (event) => {
    const selectedOption = event.target.value;
    // Verifica si el país ya está en la lista seleccionada
    if (selectedCountries.includes(selectedOption)) {
      // Si ya está, lo elimina

      const updatedSelectedCountries = selectedCountries.filter(
        (country) => country !== selectedOption
      );
      dispatch(setSelectedCountries(updatedSelectedCountries));
    } else {
      // Si no está, lo agrega
      dispatch(setSelectedCountries([...selectedCountries, selectedOption]));
    }
    //console.log("countrieselegidos", selectedCountries);
  };

  return (
    <div>
      <div className={style.PaisesSelect}>
        <select className={style.select} multiple>
          {allCountries.map((pais) => (
            <option key={pais.id} value={pais.id} onClick={handleCountrySelect}>
              {pais.name}
            </option>
          ))}
        </select>
      </div>

      <ListaSelected
        selectedCountries={selectedCountries}
        allCountries={allCountries}
      />
    </div>
  );
};

export default CountrySelect;
