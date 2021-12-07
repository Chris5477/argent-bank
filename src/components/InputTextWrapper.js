import { useDispatch } from "react-redux";
import { setValueEmail, setValuePassword } from "../redux/actionsFormLogin";
import { useSelector } from "react-redux";
import Proptypes from "prop-types";

const InputTextWrapper = ({ nameClass, text, type }) => {
  const formValue = useSelector((state) => state.loginForm);

  const myDispatch = useDispatch();

  const input =
    nameClass === "email" ? (
      <input
        onChange={(e) => myDispatch(setValueEmail(e.target.value))}
        type={type}
        id={nameClass}
        value={formValue.email}
      />
    ) : (
      <input
        onChange={(e) => myDispatch(setValuePassword(e.target.value))}
        type={type}
        id={nameClass}
        value={formValue.password}
      />
    );

  return (
    <div className="input-wrapper">
      <label htmlFor={nameClass}>{text}</label>
      {input}
    </div>
  );
};

InputTextWrapper.prototype = {
  nameClass: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};
export default InputTextWrapper;
