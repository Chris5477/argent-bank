import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import SignUp from "./pages/SignUp";
import { store } from "../src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
