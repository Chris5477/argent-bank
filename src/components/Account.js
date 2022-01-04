import Button from "./Button";
import PropTypes from "prop-types";

const Account = ({ props }) => {
	const { title, amount, description } = props;

	const classCss = window.location.pathname === "/edit" ? "-edit" : "";

	return (
		<section className={"account" + classCss}>
			<div className="account-content-wrapper">
				<h3 className="account-title">{title}</h3>
				<p className="account-amount">{amount}</p>
				<p className="account-amount-description">{description}</p>
			</div>
			<div className="account-content-wrapper cta">
				<Button nameClass={"transaction-button" + classCss} text={"View transactions"} />
			</div>
		</section>
	);
};
Account.propTypes = {
	props: PropTypes.object.isRequired,
};
export default Account;
