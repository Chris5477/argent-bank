import Feature from "./Feature";
import { features_static } from "../data_static/features";
import chat from "../img/icon-chat.png";
import money from "../img/icon-money.png";
import security from "../img/icon-security.png";

const { feature1, feature2, feature3 } = features_static;

// ALLOWS TO MAP PLACEHOLDER AND TO HAVE A MORE VISIBLE COMPONENT
const arrayFeature = [
	{ picture: chat, props: feature1 },
	{ picture: money, props: feature2 },
	{ picture: security, props: feature3 },
];

const Features = () => {
	return (
		<section className="features">
			<h2 className="sr-only">Features</h2>
			{arrayFeature.map(({ picture, props }, index) => (
				<Feature key={`id ${index}`} picture={picture} props={props} />
			))}
		</section>
	);
};
export default Features;
