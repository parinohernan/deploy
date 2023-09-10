const validateActivity = (req, res , next) => {
    const {nombre, dificultad, temporada, paises} = req.body;
    if ( !nombre ) return res.status(400).json({ error: "Falta dato nombre"});
    if ( !dificultad ) return res.status(400).json({ error: "Falta dato dificultad"});
    
    if ( dificultad < 1 && dificultad > 5 ) return res.status(400).json({ error: "Dato dificultad no valido."});
    if ( !temporada ) return res.status(400).json({ error: "Falta dato temporada"});
   
    if ( !paises || paises.length == 0) return res.status(400).json({ error: "Falta dato pais"});
    
    next();


}

module.exports = {validateActivity};