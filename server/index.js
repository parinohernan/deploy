// const axios = require("axios");
// const server = require("./src/server");
// const { conn } = require('./src/db.js');
// const PORT = 3001;

// conn.sync({ force: true }).then(() => {
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
// }).catch(error => console.error(error))

const axios = require("axios"); // Importa el módulo axios para realizar solicitudes HTTP
const server = require("./src/server"); // Importa tu servidor Express desde server.js
const { conn } = require('./src/db.js'); // Importa la instancia de la base de datos de db.js
const PORT = 3001; // Define el puerto en el que deseas que el servidor escuche
const {getCountriesForAPI} = require('./src/controllers/getCountries')

conn.sync({ force: true }) // Sincroniza FORCE : TRUE la base de datos, forzando la creación de tablas. FALCE
  .then(() => {
    server.listen(PORT, () => {
      getCountriesForAPI(); //cargo los paises desde la API a mi BDD
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => console.error(error));

 