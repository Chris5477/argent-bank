import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Error from "./pages/Error"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/profil" component={Profile} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
