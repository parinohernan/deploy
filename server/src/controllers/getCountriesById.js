const {Country, Activities} = require("../db");

const getCountriesById = async (id) => {
    console.log("id ", id);
    try {
        const country = await Country.findOne({
            where: { id: id },
            include: {
                model: Activities,
                attributes: ['nombre', 'dificultad', 'duracion', 'temporada'],
                through: {
                    attributes: [] // Excluir los atributos de la tabla de enlace
                }
            }
        });

        if (country !== null) {
            return country;
        }

        return "error";
    } catch (error) {
        return error.message;
    }
};



module.exports = {
    getCountriesById
}
