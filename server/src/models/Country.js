const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id : {
      type: DataTypes.STRING,
      allowNull: false,
      //defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      validate: {
        isThreeCharacters(value) {
          if (value.length !== 3) {
            throw new Error('El campo "id" debe tener exactamente 3 caracteres.');
          }
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, { timestamps: false });
};
    


