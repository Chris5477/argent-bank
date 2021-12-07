import Proptypes from "prop-types";

const Features = ({ picture, title, description }) => {
  return (
    <div className="feature-item">
      <img src={picture} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

Features.prototype = {
  picture: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};

export default Features;
