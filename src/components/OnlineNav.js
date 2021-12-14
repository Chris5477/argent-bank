import { Link } from "react-router-dom";
import Button from "./Button";

const OnlineNav = ({ closeModal }) => {
	return (
		<>
			<Link to="/profil">
				<span className="fa fa-user-circle"></span>
				My account
			</Link>
			<Button method={() => closeModal()} nameClass={"edit-name"} text={"Disconnection"} />
		</>
	);
};
export default OnlineNav;
