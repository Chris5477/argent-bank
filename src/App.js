import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={ProfilPage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
