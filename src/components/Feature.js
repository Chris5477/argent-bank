import PropTypes from "prop-types";

const Feature = ({ picture, props }) => {
	const { title, description } = props;

	return (
		<div className="feature-item">
			<img src={picture} alt="Chat Icon" className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{description}</p>
		</div>
	);
};
Feature.propTypes = {
	picture: PropTypes.string.isRequired,
	props: PropTypes.object.isRequired,
};
export default Feature;
