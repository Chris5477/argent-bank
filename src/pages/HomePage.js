import { useHistory } from "react-router-dom";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
	const history = useHistory();

	// IF USER HAD CHECKED REMEMBER-ME , HIS TOKEN IS MEMORIZED IN LOCALSTORAGE, THEN ITS REDIRECT IN HIS PAGE
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
