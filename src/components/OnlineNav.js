import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import disconnect from "../img/disconnect.png";
import iconProfil from "../img/icon-profil.png";
import Button from "./Button";
import PropTypes from "prop-types";

const OnlineNav = ({ closeModal }) => {
	const nameUser = useSelector((state) => state.user);
	return (
		<div className="online-nav">
			<Link className="account-link" to="/profil">
				<img className="icon-profil" src={iconProfil} alt="account" />
				{nameUser.dataUser.firstName}
			</Link>
			<div className="disconnect-area">
				<img src={disconnect} alt="logged out" />
				<Button method={() => closeModal()} nameClass={"disconnect-button"} text={"Sign out"} />
			</div>
		</div>
	);
};

OnlineNav.propTypes = {
	props: PropTypes.func,
};
export default OnlineNav;
