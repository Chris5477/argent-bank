import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react/cjs/react.development";

const FormLogin = () => {

    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    const refInputName = useRef(null)
    const refInputPassword = useRef(null)

    const LinkEnabled = refInputName.current?.value && refInputPassword.current.value &&  <Link className="sign-in-button" to="/user" >Sign In</Link> 
    
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input ref={refInputName} onChange={(e) => setName(name = e.target.value)} type="text" id="username" value={name} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input ref={refInputPassword}  onChange={(e) => setPassword(password = e.target.value)} type="password" id="password" value={password} />
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input type="checkbox" id="remember-me" />
      </div>

    {LinkEnabled}
     
    </form>
  );
};
export default FormLogin;
