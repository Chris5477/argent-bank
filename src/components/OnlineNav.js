import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const OnlineNav = () => {
  const myDispatch = useDispatch();
  const myData = useSelector((state) => state);
  const history = useHistory();

  const disconnectMe = () => {
    console.log(myData);
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
