import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
