import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";
import { loginReducer } from "./loginReducer";

const rootReducers = combineReducers({user : userReducer, loginForm : loginReducer})

export const store = createStore(rootReducers, applyMiddleware(thunk))

