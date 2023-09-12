import axios from "axios";

export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_AREA = "ORDER_BY_AREA";
export const SET_CURRENT_PAGE ="SET_CURRENT_PAGE";
export const FETCH_ERROR = "FETCH_ERROR";
export const SET_SELECTED_COUNTRIES = "SET_SELECTED_COUNTRIES";
export const RESET_COUNTRY_DETAIL ='RESET_COUNTRY_DETAIL';
// export const FETCH_SUCCESS= "FETCH_SUCCESS";

export const resetCountryDetail = () => ({
    type: 'RESET_COUNTRY_DETAIL',
  });
  

export const setCurrentPage =(payload)=>{
    //console.log("action");
    return  {type: SET_CURRENT_PAGE,
                payload}
}

export const setSelectedCountries =(payload)=>{
    // console.log("action",payload);
    return  {type: SET_SELECTED_COUNTRIES,
                payload}
}

export const getCountries = () => {
    
    return async (dispatch) => {
        try {
            let countries = await axios.get("/countries");
            return dispatch({type: GET_COUNTRIES, payload: countries.data } );
        } catch (error) {
            return dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };
};

export const getCountryDetail = (id) => {
    
    return async (dispatch) => {
        try {
            let country = await axios.get(("/countries/"+id));
            console.log("/countries/",id);
            return dispatch({type: GET_COUNTRY_DETAIL, payload: country.data } );
        } catch (error) {
            //console.log("error action ",error.message);
            return dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };
};


export const postActivity = (payload) => {
    // console.log("paiload",payload);
    // console.log("paises", payload.paises);
    return async () => {
      try {
        let activity = await axios.post("/activities", payload);
        return activity.data; 
      } catch (error) {
        console.log("error action ", error.message);
        return dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };
  };

export const filterPaisByName = (nombre) => {
    //return { type: FILTER_BY_NAME, payload: nombre };
    return async (dispatch) => {
    try {
        const url = ("/countries/?name=" + nombre);
        let countries = await axios.get(url);
        return dispatch({type: FILTER_BY_NAME, payload: countries.data } );
    } catch (error) {
        console.log("error action ",error.message);
        return dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
};
};

export const filterContinente = (continente) => {
    //return { type: FILTER_BY_NAME, payload: nombre };
    return  {type: FILTER_BY_CONTINENT, payload: continente };
    
};

export const filterActividad = (actividad) => {
    //return { type: FILTER_BY_NAME, payload: nombre };
    return  {type: FILTER_BY_ACTIVITY, payload: actividad };
    
};

export function orderByPopulation(payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export function orderByArea(payload) {
    return {
        type: ORDER_BY_AREA,
        payload
    }
}
