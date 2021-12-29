export const SET_VALUE_INPUT_EMAIL = "EMAIL_VALUE";
export const SET_VALUE_INPUT_PASSWORD = "PASSWORD_VALUE";

const setEmail = (valueEmail) => {
	return {
		type: SET_VALUE_INPUT_EMAIL,
		payload: valueEmail,
	};
};

const setPassword = (valuePassword) => {
	return {
		type: SET_VALUE_INPUT_PASSWORD,
		payload: valuePassword,
	};
};

export const setValueEmail = (value) => {
	return (dispatch) => {
		dispatch(setEmail(value));
	};
};

export const setValuePassword = (value) => {
	return (dispatch) => {
		dispatch(setPassword(value));
	};
};
