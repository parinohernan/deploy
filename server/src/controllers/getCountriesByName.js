const {Country} = require("../db");

const getCountriesByName =  async (name) => {
    
    //busca los que coinsidan en name no distingue mayusculas y minusculas.
    try { 
        const countries = await Country.findAll();
        const filtredCountries = countries
            .filter( e => e.name.toLowerCase().includes(name.toLowerCase()));
            
        return filtredCountries;
    } catch(error) {
            return ( error.message)
        }
};

module.exports = {
    getCountriesByName,
} 