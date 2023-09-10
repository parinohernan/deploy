export const validate = (datos) => {
    //console.log("validando ",datos);
    const errors = {
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        paises: [],
      };
    //valida la dificultad de 1 a 5
    if (!datos.dificultad) {
      errors.dificultad = "seleccione un valor de dificultad" ;
    } else {
      if (datos.dificultad > 5 || datos.dificultad < 1) {
        errors.dificultad = "dificultad fuera de rango" ;
      } else {
        errors.dificultad = "" ;
      }
    }
     //valida la duracion  de 1 a 24hs
     if (!datos.duracion) {
        errors.duracion = "ingrese un valor entre 1 y 24 hs" ;
      } else {
          console.log("dura ",datos.duracion);
        if (datos.duracion > 24 || datos.duracion < 1) {
          errors.duracion = "Duracion fuera de rango" ;
        } else {
          errors.duracion = "" ;
        }
      }
      //valida el campo nombre que sea mas largo de  6 caracteres y menos de 20
     if (!datos.nombre) {
        errors.nombre = "ingrese nombre la la actividad" ;
      } else {
        if (datos.nombre.length > 20 || datos.nombre.length < 4) {
          errors.nombre = "El nombre debe tener entre 4 y 20 caracteres" ;
        } else {
          errors.nombre = "" ;
        }
      }
      //valida el campo temporada no sea vacio
     if (!datos.temporada) {
        errors.temporada = "Seleccione la temporada" ;
      } else {
        
          errors.temporada = "" ;
        
      }



    //console.log("Errores ",errors);
    return errors
   
  };
  