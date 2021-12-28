import Header from "./Header";
import Button from "./Button";
import Account from "./Account";
import Modal from "./Modal";
import { accounts_static } from "../data_static/accounts";
import PropTypes from "prop-types";

const { account1, account2, account3 } = accounts_static;

const arrayAccount = [{ props: account1 }, { props: account2 }, { props: account3 }];
const openModal = () => {
	document.querySelector(".modal").classList.remove("noDisplay");
};

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
				<Button method={() => openModal()} nameClass={"edit-button"} text={"Edit Name"} />
			</div>
			<h2 className="sr-only">Accounts</h2>
			{arrayAccount.map(({ props }, index) => (
				<Account key={`index ${index}`} props={props} />
			))}
			<Modal />
		</main>
	);
};

UserPage.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default UserPage;
