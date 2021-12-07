import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const OnlineNav = () => {
  const myDispatch = useDispatch();
  const history = useHistory();

  const disconnectMe = () => {
    history.push("/");
  };
  return (
    <div className="aaa">
      <Link to="/user">Mon compte</Link>
      <button onClick={() => myDispatch(disconnectMe())}>Log out</button>
    </div>
  );
};
export default OnlineNav;
