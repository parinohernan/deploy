import React, { useState } from "react";
import styles from "./DificultadInput.module.css"; // Importa los estilos

const DificultadInput = ({ onLevelSelect }) => {
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleLevelSelect = (event, level) => {
    event.preventDefault();
    setSelectedLevel(level);
    onLevelSelect(level);
  };

  return (
    <div className={styles.botones}>
      <div className={styles["level-selector"]}>
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            className={selectedLevel === level ? styles.selected : ""}
            onClick={(event) => handleLevelSelect(event, level)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DificultadInput;
