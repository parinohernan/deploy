import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CardsGallery.module.css";
import Error from "../../views/Error/Error";
import { setCurrentPage } from "../../redux/action";

function CardGallery() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.countries);
  const error = useSelector((state) => state.error);
  const currentPage = useSelector((state) => state.currentPage);

  const cardsPerPage = 10; //por enunciado se piden 10
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  //const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentCards = cards.slice(startIndex, endIndex);

  const goToPage = (page) => {
    console.log("goo", page);
    dispatch(setCurrentPage(page));
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className={styles.cards}>
      {/* Mostrar las tarjetas actuales */}

      {currentCards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          population={card.population.toLocaleString()}
          area={card.area.toLocaleString()}
          continents={card.continents}
          flag={card.flag}
          data={card}
        />
      ))}
      {/* Controles de paginación */}
      <div className={styles.controles}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
      <div className={styles.container}></div>
    </div>
  );
}

export default CardGallery;
