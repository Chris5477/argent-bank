import Account from "../components/Account";
import { accounts_static } from "../data_static/accounts";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Button from "../components/Button";
import Error from "./Error";
import Loader from "../components/Loader";

const { account1, account2, account3 } = accounts_static;

const Profile = () => {
	const userData = useSelector((state) => state.user);
	const fullNameUser = `${userData.dataUser.firstName} ${userData.dataUser.lastName}`;

	const openModal = () => {
		document.querySelector(".modal").classList.remove("noDisplay");
	};

	let contentProfilePage = null;

	if (userData.isLoad) {
		contentProfilePage = <Loader />;
	} else if (userData.error) {
		contentProfilePage = <Error />;
	} else {
		contentProfilePage = (
			<div className="header">
				<h1>
					Welcome back
					<br />
					{fullNameUser}
				</h1>
				<Button method={() => openModal()} nameClass={"edit-button"} text={"Edit Name"} />
			</div>
		);
	}
	return (
		<>
			<main className="main bg-dark">
				<Header />
				{contentProfilePage}
				<h2 className="sr-only">Accounts</h2>
				<Account props={account1} />
				<Account props={account2} />
				<Account props={account3} />
				<Modal />
			</main>
		</>
	);
};
export default Profile;
