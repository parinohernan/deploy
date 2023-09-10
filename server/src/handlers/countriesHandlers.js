const {getCountriesForAPI, getAllCountries, getAllData} = require ('../controllers/getCountries')
const {getCountriesById } = require ('../controllers/getCountriesById')
const {getCountriesByName } = require ('../controllers/getCountriesByName')

const getCountriesHandler = async (req,res) => {
    // esta ruta maneja 2 subrutas una cuando manda name por querry y otra cuando no envio nada
    try {
    const {name} = req.query;
    if (name !== undefined) {
        const countries = await getCountriesByName(name);
        res.status(201).json(countries);
       // res.send('buscare los paises que el nombre contenga '+name);
    } else {
        console.log("busco los paises con las actividades");
        const countries = await getAllData();
        //console.log(countries[0].dataValues);
        res.status(201).json(countries);
    }    
    } catch (error) {
    res.send.status(404).json({error: error.menssage})    
    }
}

const getCountryByIDHandler = async(req, res) => {
    try {
        const idPais = req.params.idPais;
        console.log(idPais);
        const pais = await getCountriesById(idPais);
        res.status(201).json(pais);
    } catch (error) {
        res.status(404).json({error: error.menssage})
    }
}


module.exports = {
        getCountriesHandler,
        
        getCountryByIDHandler,
    }