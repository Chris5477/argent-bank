import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiCall } from "../redux/actionUser";

const FormLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let refInputEmail = useRef(null);
  let refInputPassword = useRef(null);

  const dataUser = useSelector((state) => state);
  const history = useHistory();
  const myDispatch = useDispatch();

  useEffect(() => {
    apiCall();
  }, []);

  const objectUser = {
    email,
    password,
  };

  const displayButton =
    email && password ? (
      <input type="submit" className="sign-in-button" value="Se connecter" />
    ) : (
      <input type="submit" className="sign-in-button" value="Se connecter" disabled />
    );

  const sendData = (e) => {
    console.log(dataUser);
    e.preventDefault();
    myDispatch(apiCall(objectUser));
    if (dataUser.online) {
      history.push("/user", dataUser);
    }
  };

  return (
    <form onSubmit={(e) => sendData(e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          ref={refInputEmail}
          onChange={(e) => setEmail((email = e.target.value))}
          type="text"
          id="username"
          value={email}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          ref={refInputPassword}
          onChange={(e) => setPassword((password = e.target.value))}
          type="password"
          id="password"
          value={password}
        />
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input type="checkbox" id="remember-me" />
      </div>

      {displayButton}
    </form>
  );
};
export default FormLogin;
