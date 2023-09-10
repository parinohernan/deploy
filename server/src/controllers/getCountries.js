const axios = require('axios')

const URL_BASE = 'http://localhost:5000/countries'
const {Country, Activities} = require("../db");
//const { getActivities } = require('./Activities');

const getCountriesForAPI =  async () => {
    try { 
        const { data } = await axios(`${URL_BASE}`);
        const filtredData = data.map( (countrie) => {
            let cap = "";
            if (countrie.hasOwnProperty("capital")) {
                cap = countrie.capital[0];
            } 
            let continente = "Undefined";
            if (countrie.hasOwnProperty("continents")) {
                continente = countrie.continents[0];
            }   
            return {
                id: countrie.cca3,
                name : countrie.name.common,
                flag : countrie.flags.png,
                capital : cap,
                subregion : countrie.subregion,
                area: countrie.area,
                population : countrie.population,
                continents : continente,
            }
        })
        let insertedCountries = await Country.bulkCreate(filtredData);
        return ("Se completo la carga de " + insertedCountries.length + " countries" )        
    } catch(error) {
            return ( error.message)
        }
};


const getAllData = async () => {
    try {
        const countriesConActividad = await Country.findAll({
          include: {
            model: Activities,
            attributes: ['nombre', 'dificultad','duracion','temporada'],
            through: {
              attributes: [] // Excluir los atributos de la tabla de enlace
            }
          }
       });

        return countriesConActividad;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getCountriesForAPI,
    //getAllCountries,
    getAllData,

}
