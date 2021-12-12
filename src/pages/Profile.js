import Account from "../components/Account";
import { accounts_static } from "../data_static/accounts";
import { useSelector } from "react-redux";

const { account1, account2, account3 } = accounts_static;

const Profile = () => {
	const userData = useSelector((state) => state.user);
	const fullNameUser = `${userData.dataUser.firstName} ${userData.dataUser.lastName}`;

	const openModal = () => {
		document.querySelector(".modal").classList.remove("noDisplay");
	};

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{fullNameUser}
				</h1>
				<button onClick={() => openModal} className="edit-button">
					Edit Name
				</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<Account props={account1} />
			<Account props={account2} />
			<Account props={account3} />
		</main>
	);
};
export default Profile;
