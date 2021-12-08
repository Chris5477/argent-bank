import { loginRequest } from "../requests/loginRequest";
export const LOADING = "LOADING";
export const GET_DATA_USER = "GET_DATA";
export const ERROR_GET_DATA_USER = "ERROR_GET_DATA_USER";
export const DISCONNECT = "DISCONNECT";

const loading = () => {
  return {
    type: LOADING,
  };
};

export const getDataUserSucces = (success) => {
  return {
    type: GET_DATA_USER,
    payload: success,
  };
};

export const errorGetDataUser = (error) => {
  return {
    type: ERROR_GET_DATA_USER,
    payload: error,
  };
};

const disconnect = () => {
  return {
    type: DISCONNECT,
  };
};

export const apiCall = (objUser) => {
  return (dispatch) => {
    dispatch(loading());
    loginRequest(dispatch, objUser);
    return new Error("Impossible de récupérer les information de votre compte");
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(disconnect());
  };
};
