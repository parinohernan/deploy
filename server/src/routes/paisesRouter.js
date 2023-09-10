const { Router } = require("express");
//const getCountries = require('../controllers/getCountries');
//const getCountriesById = require('../controllers/getCountriesById');
//const { get } = require("../server");
const {getCountriesHandler, getCountryByIDHandler,} = require('../handlers/countriesHandlers')



paisesRouter=Router();

paisesRouter.get('/', getCountriesHandler );

paisesRouter.get('/:idPais', getCountryByIDHandler); 
    
 

module.exports = paisesRouter; 