import {Link} from "react-router-dom"
import argentBankLogo from "../img/argentBankLogo.png"

const MainNav = () => {
return(
    <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="company logo" />
        <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
        <Link className="main-nav-item" to="/signup">
          <span className="fa fa-user-circle"></span>
          Sign In
        </Link>
      </div>
    </nav>
)
}
export default MainNav;