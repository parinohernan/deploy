const initialState = {
  countries: [],
  allCountries: [],
  detail: {},
  currentPage: 1, //maneja la pagina que se muestra en el CardsGallery
  selectedCountries:[],
  error: null     //es para mostrar el mensaje error404 en caso que el server
}

import { GET_COUNTRIES, FILTER_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_COUNTRY_DETAIL, POST_ACTIVITY, ORDER_BY_AREA, ORDER_BY_POPULATION, SET_CURRENT_PAGE, FETCH_ERROR, SET_SELECTED_COUNTRIES } from "./action";

const rootReducer = (state = initialState, action) => {
  //console.log("en  REDUCER",action);  
  const allCountries = state.allCountries;
  const countries = state.countries;
  switch (action.type){
        case SET_CURRENT_PAGE:
              return {
                ...state,
                currentPage: action.payload,
              };
        case SET_SELECTED_COUNTRIES:
          return {
            ...state,
            selectedCountries: action.payload,
          };
        case FETCH_ERROR:
          return {
            ...state,
            error: action.payload,
          };
        case GET_COUNTRIES:
          return { ...state, 
            countries: action.payload,
            allCountries: action.payload 
           }

        case GET_COUNTRY_DETAIL:
          console.log("reducer");
        return{
            ...state,
            detail: action.payload
        }
        case POST_ACTIVITY:
            return {
                ...state,
            }  

        case FILTER_BY_NAME: //por query
          return {...state, countries: action.payload}

        case FILTER_BY_CONTINENT:
          //console.log("continen",action);
          const countriesContinent = [...state.allCountries];
          const filtered = action.payload === "Todos" ?
          allCountries 
          : 
          countriesContinent.filter(e => e.continents === action.payload);
          return{
              ...state,
              countries: filtered
          }
           
        case FILTER_BY_ACTIVITY:
        // este filtro es un poco complicado porque las actividades son un array de objetos
        const countriesActivity = [...state.countries];
        const filteredByAct = action.payload === "Todas" ?
        countries 
        : 
        countriesActivity.filter((pais) => {//recorre todos los paises
          
          for (let i = 0; i < pais.Activities.length; i++) {//recorre todas las actividades de cada pais
             const actividad = pais.Activities[i].nombre;
             console.log("for ",actividad);
            if (actividad === action.payload ) {
               return pais;
            }
           }
        });
        
        return{
            ...state,
            countries: filteredByAct
        }

        case ORDER_BY_POPULATION:
            // Copia el array de países del estado actual
            const countriesCopy = [...state.countries];
            // Utiliza la función de comparación para ordenar el array de países
            countriesCopy.sort((a, b) => {
                
              if (action.payload === "Ascendente") {
                 
                return a.population - b.population; // Orden ascendente
                } else {
                        
                return b.population - a.population; // Orden descendente
                }
            });
            return {
              ...state,
              countries: countriesCopy, // Asigna el array de países ordenado
            };
         

        case ORDER_BY_AREA:
            // Copia el array de países del estado actual
            const countriesCopy0 = [...state.countries];

            // Utiliza la función de comparación para ordenar el array de países
            countriesCopy0.sort((a, b) => {
                if (action.payload === "Ascendente") {
                   
                return a.area - b.area; // Orden ascendente
                } else {
                       
                return b.area - a.area; // Orden descendente
                }
            });

            return {
                ...state,
                countries: countriesCopy0, // Asigna el array de países ordenado
            };
           
        default:
          return { ...state};
    }
     
};

export default rootReducer;