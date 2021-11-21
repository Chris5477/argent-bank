import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
