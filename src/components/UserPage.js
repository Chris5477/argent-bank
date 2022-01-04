import Header from "./Header";
import Account from "./Account";
import { accounts_static } from "../data_static/accounts";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const { account1, account2, account3 } = accounts_static;

const arrayAccount = [{ props: account1 }, { props: account2 }, { props: account3 }];

const UserPage = ({ userName }) => {
	return (
		<main className="main bg-dark">
			<Header />
			<div className="header">
				<h1>
					Welcome back
					<br />
					{userName}
				</h1>
				<Link to="/edit" className="edit-button">
					Edit Name
				</Link>
			</div>
			<h2 className="sr-only">Accounts</h2>
			{arrayAccount.map(({ props }, index) => (
				<Account key={`index ${index}`} props={props} />
			))}
		</main>
	);
};

UserPage.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default UserPage;
