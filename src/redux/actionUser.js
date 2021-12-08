import axios from "axios";
export const LOADING = "LOADING";
export const GET_DATA_USER = "GET_DATA";
export const ERROR_GET_DATA_USER = "ERROR_GET_DATA_USER";
export const DISCONNECT = "DISCONNECT";

const loading = () => {
  return {
    type: LOADING,
  };
};

const getDataUserSucces = (success) => {
  return {
    type: GET_DATA_USER,
    payload: success,
  };
};

const errorGetDataUser = (error) => {
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

    axios
      .post("http://localhost:3001/api/v1/user/login", {
        ...objUser,
      })
      .then((request) => {
        if (request.status === 200) {
          const token = request.data.body.token;
          sessionStorage.setItem("token", JSON.stringify({tokenUser : token}))
          axios
            .post(
              `http://localhost:3001/api/v1/user/profile`,
              (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
            )
            .then((user) => dispatch(getDataUserSucces(user.data.body)))
            .catch((err) => dispatch(errorGetDataUser(err.message)));
        }

        return new Error("Impossible de récupérer les information de votre compte");
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(disconnect());
  };
};
