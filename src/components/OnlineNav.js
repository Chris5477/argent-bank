import { Link } from "react-router-dom";
import disconnect from "../img/disconnect.png";
import Button from "./Button";

const OnlineNav = ({ closeModal }) => {
	const device = window.innerWidth < 798 ? <img src={disconnect} alt="logged out" /> : "log out";

	return (
		<>
			<Link className="account-link" to="/profil">
				<span className="fa fa-user-circle"></span>
				My account
			</Link>
			<Button method={() => closeModal()} nameClass={"disconnect-button"} text={device} />
		</>
	);
};
export default OnlineNav;
