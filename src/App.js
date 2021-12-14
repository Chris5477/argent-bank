import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/signup" component={Signup} />
						<Route path="/profil" component={Profile} />
						<Route component={Error} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;
