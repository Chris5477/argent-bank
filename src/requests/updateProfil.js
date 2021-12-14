import axios from "axios";
import { verifyToken } from "./authRequest";

export const updateDatabase = (jwt, nameA, nameB, dispatcher) => {
	axios({
		method: "put",
		url: "http://localhost:3001/api/v1/user/profile",
		data: {
			firstName: nameA,
			lastName: nameB,
		},
		config: (axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`),
	})
		.then(() => verifyToken(dispatcher, jwt))
		.catch((err) => console.log(err));
};
