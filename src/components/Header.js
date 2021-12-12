import logoCompagny from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="main-nav">
      <Link to="/">
        <img className="main-nav-logo-image" src={logoCompagny} alt="Argent Bank Logo" />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>

      <div>
        <Link to="/signup">
          <span className="fa fa-user-circle"></span>
          Sign In
        </Link>
      </div>
    </nav>
  );
};
export default Header;
