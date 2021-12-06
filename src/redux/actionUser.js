import axios from "axios";

export const LOADING = "LOADING";
export const GET_DATA_USER = "GET_DATA";
export const ERROR_GET_DATA_USER = "ERROR_GET_DATA_USER";

const loading = () => {
  return {
    type: LOADING,
  };
};

const getDataUserSucces = (success) => {
  return {
    type: GET_DATA_USER,
    payload : success
  };
};

const errorGetDataUser = (error) => {
  return {
    type: ERROR_GET_DATA_USER,
    payload : error
  };
};

export const apiCall = (objUser) => {
    return dispatch => {
        dispatch(loading())

        axios.post("http://localhost:3001/api/v1/user/login", {
            ...objUser
        })
        .then(request => {
            if(request.status === 200){
              console.log(request)
                request.headers.authorization = request.data.body.token
                axios.post("http://localhost:3001/api/v1/user/profile", {...request})
                .then((res) => {
                  dispatch(getDataUserSucces(res.data))})
                .catch(err => {
                    console.log("erreur sur la requete")
                    dispatch(errorGetDataUser(err.message))
                })
            }
        })
    }
}
