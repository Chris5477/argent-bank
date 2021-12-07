import {Link} from "react-router-dom"
import argentBankLogo from "../img/argentBankLogo.png"
import { useSelector } from "react-redux"
import OnlineNav from "./OnlineNav"

const MainNav = () => {


  const myData = useSelector(state => state)
  
  const isOnline = myData.online ? 
  <OnlineNav />  : 
  <Link className="main-nav-item" to="/signup">
  <span className="fa fa-user-circle"></span>
  Sign in
</Link>
return(
    <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="company logo" />
        <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isOnline}
      </div>
    </nav>
)
}
export default MainNav;