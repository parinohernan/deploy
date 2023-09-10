const { Sequelize } = require('sequelize');
const sequelizeTestHelpers = require('sequelize-test-helpers');

// Configuración de la base de datos de prueba (PostgreSQL)
const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'tu_basededatos',
  username: 'tu_usuario',
  password: 'tu_contraseña',
  host: 'localhost', // O la dirección de tu servidor de PostgreSQL
  port: 5432, // El puerto de tu servidor de PostgreSQL
  logging: false, // Deshabilita los logs para las pruebas
});

// Importa tu modelo Country y configura sequelize-test-helpers
const Country = require('../src/models/Country')(sequelize);
sequelizeTestHelpers.init(Country, { sequelize });

// Antes de cada prueba, sincroniza la base de datos
beforeEach(async () => {
  await sequelize.sync({ force: true });
});

// Después de cada prueba, cierra la conexión a la base de datos
afterEach(async () => {
  await sequelize.close();
});

module.exports = {
  sequelize,
  Country,
};
