import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css"; // Importa el archivo de estilos CSS
import DificultadInput from "../../components/form/DificultadInput/DificultadInput";
import CountrySelect from "../../components/form/CountriesSelect/CountriesSelect";
import {
  getCountries,
  postActivity,
  setSelectedCountries,
} from "../../redux/action";
import Error from "../Error/Error"; //vista de error
import { validate } from "./validate";

const Form = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const [formErrors, setFormErrors] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    paises: [],
  });

  const [datosForm, setDatosForm] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    paises: [],
  });

  // const [selectedCountries, setSelectedCountries] = useState([]);
  const selectedCountries = useSelector((state) => state.selectedCountries);

  const handleDificultadSelect = (level) => {
    const errors = validate({ ...datosForm, dificultad: level });
    setFormErrors(errors);
    setDatosForm({ ...datosForm, dificultad: level });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("valida form ", selectedCountries.length, formErrors);
    if (
      formErrors.nombre !== "" ||
      formErrors.dificultad !== "" ||
      formErrors.duracion !== "" ||
      formErrors.temporada !== "" ||
      selectedCountries.length === 0
    ) {
      alert("Error: debe completar todos los datos");
    } else {
      //no agrego los paises al estado local datosForm solo los envio al dispatch
      dispatch(
        postActivity({
          ...datosForm,
          paises: selectedCountries,
        })
      );
      alert("Se ha creado la actividad");

      //limpio los valores des estado y del form
      limpiarForm();
    }
  };
  useEffect(() => {
    dispatch(getCountries()); // Lanza la acción para obtener datos
  }, [dispatch]);

  const limpiarForm = () => {
    setDatosForm({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      paises: [],
    });
    dispatch(setSelectedCountries([]));
  };

  const changeNombreHandler = (event) => {
    const inputValue = event.target.value;
    const permitidoInput = inputValue.replace(/[^A-Za-z0-9,". ]/g, ""); // Expresión regular para filtrar los caracteres permitidos
    changeHandler(event);
  };

  const changeHandler = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    setDatosForm({ ...datosForm, [prop]: value });
    const errors = validate({ ...datosForm, [prop]: value });
    setFormErrors(errors);
  };
  // console.log("error", error)  error para cuando hay problemas en el server y no trae la info;
  if (error) {
    return <Error error={error} />;
  } else {
    return (
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className={style.divForm}>
          <h2 className={style.subTitle}>Nueva actividad:</h2>
          <div className={style.divActividadConteiner}>
            <div className={style.divImput}>
              <div className={style.divF}>
                <label>Nombre</label>
                <div className={style.divF}>
                  <input
                    onChange={changeNombreHandler}
                    value={datosForm.nombre}
                    type="text"
                    name="nombre"
                  />
                </div>
                <p className={style.error}>
                  {formErrors.nombre !== "" && formErrors.nombre}
                </p>
              </div>
              <div className={style.divF}>
                <label>Dificultad: </label>
                <DificultadInput onLevelSelect={handleDificultadSelect} />
                <p className={style.error}>
                  {formErrors.dificultad !== "" && formErrors.dificultad}
                </p>
                {/* {console.log("dificultad err ", formErrors)} */}
              </div>
              <div className={style.divF}>
                <label>Duracion :</label>
                <div className={style.duracionInput}>
                  <input
                    onChange={changeHandler}
                    value={datosForm.duracion}
                    type="text"
                    name="duracion"
                  />
                  <p className={style.error}>
                    {formErrors.duracion !== "" && formErrors.duracion}
                  </p>
                </div>
              </div>
              <div>
                <label>Temporada: </label>
                <div className={style.temporadaInput}>
                  <select
                    onChange={changeHandler}
                    value={datosForm.temporada}
                    name="temporada"
                  >
                    <option value=""></option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                  </select>
                  <p className={style.error}>
                    {formErrors.temporada !== "" && formErrors.temporada}
                  </p>
                </div>
              </div>
            </div>

            <div className={style.divPaisesSelect}>
              <label>Paises: </label>
              <CountrySelect />
              <p className={style.error}>
                {selectedCountries.length == 0 && "Seleccione uno o mas paises"}
              </p>
            </div>
          </div>
          <div className={style.divBotones}>
            <button type="button" onClick={limpiarForm}>
              Limpiar datos
            </button>

            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    );
  }
};

export default Form;
