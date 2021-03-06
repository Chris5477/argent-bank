import axios from "axios";
import { verifyToken } from "./authRequest";

export const loginRequest = (dispatcher, objUser) => {
	axios
		.post("http://localhost:3001/api/v1/user/login", {
			...objUser,
		})

		/* IF REQUEST IS A SUCCESS , SO WE GET TOKEN AND DEPENDING ON IF REMEMBER ME WAS CHECKED, 
		THE TOKEN IS PLACED IN THE LOCALSTORAGE OR THE SESSIONSTPRAGE */

		.then((response) => {
			if (response.status === 200) {
				const token = response.data.body.token;
				if (objUser.rememberMe) {
					localStorage.setItem("token", JSON.stringify({ tokenUser: token }));
					verifyToken(dispatcher, token);
				} else {
					sessionStorage.setItem("token", JSON.stringify({ tokenUser: token }));
					verifyToken(dispatcher, token);
				}
			} else {
				return "E-mail ou mot de passe invalide !";
			}
		})
		.catch((err) => new Error(err));
};
