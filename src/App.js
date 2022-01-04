import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import EditName from "./pages/EditName";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<BrowserRouter>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/login" component={Signup} />
							<Route path="/profil" component={Profile} />
							<Route path="/edit" component={EditName} />
							<Route component={Error} />
						</Switch>
						<Footer />
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</div>
	);
};

export default App;
