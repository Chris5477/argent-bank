import axios from "axios";
import { getDataUserSucces, errorGetDataUser } from "../redux/actionUser";

export const verifyToken = (dispatcher, jwt) => {
  axios
    .post(
      `http://localhost:3001/api/v1/user/profile`,
      (axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`)
    )
    .then((user) => dispatcher(getDataUserSucces(user.data.body)))
    .catch((err) => dispatcher(errorGetDataUser(err.message)));
};
