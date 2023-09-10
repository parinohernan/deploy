const { Router } = require("express");
const activitiesRouter = require ("./activitiesRouter");
const paisesRouter = require ("./paisesRouter");

//const countriesRouter = require ("./countriesRouter");
const mainRouter = Router();


mainRouter.get('/', (req, res) => {
    res.send('Hola, estas en el servidor de countries'); // Envía la respuesta "Hola" al navegador
  });

mainRouter.use('/countries', paisesRouter)


// mainRouter.get('/countries', (req, res) => {
//    res.send("Estoy en paises  ");
// });

mainRouter.get('/countries/:idPais', (req, res) => {
  console.log("req id param", req.params);
  res.send("Estoy en paises IDPAIS ");
});

mainRouter.use('/activities', activitiesRouter);

module.exports = mainRouter;
