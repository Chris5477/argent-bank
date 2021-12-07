import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiCall } from "../redux/actionUser";
import InputTextWrapper from "./InputTextWrapper";
import InputCheckboxWrapper from "./InputCheckboxWrapper";
import Button from "./Button";

const FormLogin = () => {
  const dataUser = useSelector((state) => state.user);
  const dataForm = useSelector((state) => state.loginForm);
  const history = useHistory();
  const myDispatch = useDispatch();

  useEffect(() => {
    apiCall();
  }, []);

  const objectUser = {
    email: dataForm.email,
    password: dataForm.password,
  };

  const sendData = (e) => {
    e.preventDefault();
    myDispatch(apiCall(objectUser));
    if (dataUser.online) {
      history.push("/user");
    }
  };

  return (
    <form onSubmit={(e) => sendData(e)}>
      <InputTextWrapper nameClass={"email"} text={"UserName"} type={"text"} />
      <InputTextWrapper nameClass={"password"} text={"Password"} type={"password"} />
      <InputCheckboxWrapper />
      {dataForm.email && dataForm.password ? (
        <Button nameClass="sign-in-button" type={"submit"} text={"Se connecter"} />
      ) : (
        <Button nameClass="sign-in-button" type={"submit"} attribut={true} text={"Se connecter"} />
      )}
    </form>
  );
};
export default FormLogin;
