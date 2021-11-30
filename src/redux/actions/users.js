import axios from "axios"

export const LOAD_USERS = "LOAD_USERS"
export const GET_USERS = "GET_USERS"
export const GET_USERS_FAILED = "GET_USERS_FAILED"

const loadUsers = () => {
    return {
        type : LOAD_USERS
    }
}

const getUsers = (success) => {
    return {
        type : GET_USERS,
        payload : success
    }
}

const getUsersFailed = (error) => {
    return {
        type : GET_USERS_FAILED,
        payload : error
    }
}

export const getDataUser = () => {
    return dispatch => {
        dispatch(loadUsers())

        axios.get("http://localhost:3001/users")
        .then(res => dispatch(getUsers(res.data)))
        .catch(error => dispatch(getUsersFailed(error.message)))
    }
}
