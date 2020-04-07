import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const FETCHMAINTENANCEBEGIN = 'FETCHMAINTENANCEBEGIN';
export const FETCHMAINTENANCESUCCESS = 'FETCHMAINTENANCESUCCESS';
export const FETCHMAINTENANCEFAILURE = 'FETCHMAINTENANCEFAILURE';

export const fetchMaintenanceBegin = () => ({
    type: FETCHMAINTENANCEBEGIN
});


export const fetchMaintenanceSuccess = maintenances => ({
    type: FETCHMAINTENANCESUCCESS,
    payload: {
        maintenances
    }
});


export const fetchMaintenanceError = error => ({
    type: FETCHMAINTENANCEFAILURE,
    payload: {
        error
    }
});

const maintenanceReducer = (state = [], action)=>{
    switch(action.type){
      case FETCHMAINTENANCEBEGIN:
        return{
          ...state,
        }
      
      case FETCHMAINTENANCESUCCESS:
        return{
          ...state,
          devices: action.payload
        }
      
      case FETCHMAINTENANCEFAILURE:
        return{
          ...state,
          error: action.error
        }
      default:
        return state;
      
    }

}


export const findAll = () => {
    return dispatch => {
        dispatch(fetchMaintenanceBegin());
        return fetch("/maintenances")
          .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(fetchMaintenanceSuccess(json.products));
            return json.products;
          })
          .catch(error => dispatch(fetchMaintenanceError(error)));
      };
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}


export default maintenanceReducer