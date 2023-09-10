

const axios = require("axios"); // Importa el módulo axios para realizar solicitudes HTTP
const server = require("./src/server"); // Importa tu servidor Express desde server.js
const { conn } = require('./src/db.js'); // Importa la instancia de la base de datos de db.js
const PORT = process.env.PORT; // Define el puerto en el que deseas que el servidor escuche
const {getCountriesForAPI} = require('./src/controllers/getCountries')
require('dotenv').config;

conn.sync({ alter: true }) // Sincroniza FORCE : TRUE la base de datos, forzando la creación de tablas. FALCE
  .then(() => {
    server.listen(PORT, () => {
     // getCountriesForAPI(); //cargo los paises desde la API a mi BDD
      console.log(`Server listening on port ${PORT} salud`);
    });
  })
  .catch(error => console.error(error));

 