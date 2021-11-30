import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
};

export default App;
