const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', {
    id : {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validator:{
        min : 1,
        max : 5, 
      }
    },
    duracion: {
      type: DataTypes.INTEGER,
      validator : {
        min : 0,
      }
    },
    temporada: {
      type: DataTypes.ENUM('Verano' , 'Otoño' , 'Invierno', 'Primavera'),
      allowNull: false,
    }
  }, { timestamps: false });
};