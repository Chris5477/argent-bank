import { DISCONNECT, ERROR_GET_DATA_USER, GET_DATA_USER, LOADING } from "./actionUser";

const userState = {
	isLoad: false,
	dataUser: [],
	error: "",
};

export const userReducer = (state = userState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isLoad: true,
			};

		case GET_DATA_USER:
			return {
				...state,
				isLoad: false,
				dataUser: action.payload,
				error: "",
			};
		case ERROR_GET_DATA_USER:
			return {
				...state,
				isLoad: false,
				dataUser: [],
				error: action.payload,
			};

		case DISCONNECT:
			return {
				...state,
				isLoad: false,
				dataUser: [],
				error: "",
			};
		default:
			return state;
	}
};
