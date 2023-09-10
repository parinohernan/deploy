const {getActivities, postActivity} = require ('../controllers/Activities.js')

const getActivitiesHandler = async(req, res) => {
    try {
        const activity = await getActivities();
        res.status(201).json(activity);
    } catch (error) {
        res.status(404).json({error: error.menssage})
    }
}

const postActivityHandler = async(req, res) => {
    try {
        //console.log("hola req",req.body);
        const {nombre, dificultad, duracion, temporada, paises} = req.body;
        if ( !nombre || !dificultad || !duracion || !temporada || !paises) {
            res.status(404).json({error: "faltan datos"})
        }
        const newActivity = {
            nombre: nombre,
            dificultad: dificultad,
            duracion: duracion,
            temporada: temporada,
        }
       // console.log("objeto activitie en handler: ",newActivity);
        const Activity = await postActivity(newActivity, paises);
        res.status(201).json(Activity);
    } catch (error) {
        res.status(404).json({error: error.menssage})
    }
}

module.exports = {
        getActivitiesHandler,
        postActivityHandler
}