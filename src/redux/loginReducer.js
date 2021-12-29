import { SET_VALUE_INPUT_EMAIL, SET_VALUE_INPUT_PASSWORD } from "./actionsFormLogin";

const loginState = {
	email: "",
	password: "",
};

export const loginReducer = (state = loginState, action) => {
	switch (action.type) {
		case SET_VALUE_INPUT_EMAIL:
			return {
				...state,
				email: action.payload,
			};

		case SET_VALUE_INPUT_PASSWORD:
			return {
				...state,
				password: action.payload,
			};
		default:
			return state;
	}
};
