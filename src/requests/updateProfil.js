import axios from "axios";

export const updateDatabse = (jwt, nameA, nameB) => {
    axios({
        method: 'put',
        url: 'http://localhost:3001/api/v1/user/profile',
        data: {
          firstName: nameA,
          lastName: nameB
        },
        config : axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
      })
      .then(() => console.log("Modifications enregistrées"))
      .catch((err) => console.log(err));
}