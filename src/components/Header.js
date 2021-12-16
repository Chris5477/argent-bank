import logoCompagny from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import OnlineNav from "./OnlineNav";

const Header = () => {
	const history = useHistory();

	const disconnect = () => {
		sessionStorage.clear();
		localStorage.clear();
		history.push("/");
	};

	return (
		<nav className="main-nav">
			<Link to="/">
				<img className="main-nav-logo-image" src={logoCompagny} alt="Argent Bank Logo" />
			</Link>
			<h1 className="sr-only">Argent Bank</h1>

			<div>
				{JSON.parse(sessionStorage.getItem("token") || localStorage.getItem("token")) ? (
					<OnlineNav closeModal={() => disconnect()} />
				) : (
					<Link to="/signup">
						<span className="fa fa-user-circle"></span>
						Sign in
					</Link>
				)}
			</div>
		</nav>
	);
};
export default Header;
