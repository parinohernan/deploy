import React, { useEffect } from "react";
import BarraFiltros from "../../components/BarraFiltros/BarraFiltros";
import BarraOrden from "../../components/BarraOrden/BarraOrden";
import CardsGallery from "../../components/CardsGallery/CardsGallery";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/action";
import styles from "./Home.module.css"; // Importa el archivo de estilos CSS

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div>
        <CardsGallery />
      </div>
      <div className={styles.homeFyO}>
        <BarraFiltros />
        <BarraOrden />
      </div>
    </div>
  );
};

export default Home;
