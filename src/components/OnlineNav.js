import { Link } from "react-router-dom";
import { logout } from "../redux/actionUser";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const OnlineNav = () => {
  const myDispatch = useDispatch();
  const history = useHistory();

  const disconnectMe = () => {
    myDispatch(logout());
    history.push("/");
    sessionStorage.clear()
  };
  return (
    <div className="aaa">
      <Link to="/user">Mon compte</Link>
      <button className="sign-in-button" onClick={() => disconnectMe()}>
        Deconnexion
      </button>
    </div>
  );
};
export default OnlineNav;
