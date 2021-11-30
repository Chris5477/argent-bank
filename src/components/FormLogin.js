import { useState, useRef } from "react";

const aaa = (e, d, n, p) => {
  let isValid = true;
  const v = d.filter((el) => el.password === p && el.firstName === n);
  isValid = v.length ? true : false;
  if (!isValid) {
    e.preventDefault();
  } else {
    window.history.pushState({ v }, null, window.location.origin + "/user");
  }
};

const FormLogin = ({ dataUser }) => {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let refInputName = useRef(null);
  let refInputPassword = useRef(null);

  const displayButton =
    name && password ? (
      <button className="sign-in-button" onClick={(e) => aaa(e, dataUser, name, password)}>
        Se connecter
      </button>
    ) : (
      <button className="sign-in-button" disabled>
        Se connecter
      </button>
    );

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          ref={refInputName}
          onChange={(e) => setName((name = e.target.value))}
          type="text"
          id="username"
          value={name}
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
