import { LOAD_USERS, GET_USERS, GET_USERS_FAILED } from "../actions/users";

const userState = {
    isLoad : false,
    infoUsers : [],
    error : ""
}

export const userReducer = (state = userState, action) => {
    switch(action.type){
        case LOAD_USERS : 
        return { 
            ...state,
            isLoad : true
        }
        case GET_USERS : 
        return {
            ...state,
            isLoad : false,
            infoUsers : action.payload,
            error : ""
        }
        case GET_USERS_FAILED : 
        return {
            ...state,
            infoUsers : [],
            error : action.payload
        }
        default : return state
    }
}