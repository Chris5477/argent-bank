import { useHistory } from "react-router-dom";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
	const history = useHistory();

	JSON.parse(localStorage.getItem("token")) && history.push("/profil");

	return (
		<main>
			<Header />
			<Hero />
			<Features />
		</main>
	);
};
export default HomePage;
