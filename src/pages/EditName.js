import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDatabase } from "../requests/updateProfil";
import Input from "../components/Input";
import Account from "../components/Account";
import { useHistory } from "react-router-dom";
import { accounts_static } from "../data_static/accounts";
import { useSelector } from "react-redux";

const EditName = () => {
	const userName = useSelector((state) => state.user);
	const { account1, account2, account3 } = accounts_static;

	const arrayAccount = [{ props: account1 }, { props: account2 }, { props: account3 }];

	const { firstName, lastName } = userName.dataUser;

	const [first, setFirstname] = useState("");
	const [last, setLastname] = useState("");
	const myDispatch = useDispatch();
	const myHistory = useHistory();
	const redirectProfilPage = () => {
		myHistory.push("/profil");
	};
	const updateProfil = (e) => {
		e.preventDefault();
		if (first && last) {
			let token = null;
			if (sessionStorage.length) {
				token = JSON.parse(sessionStorage.getItem("token"));
			} else {
				token = JSON.parse(localStorage.getItem("token"));
			}
			updateDatabase(token.tokenUser, first, last, myDispatch);
		}
	};

	return (
		<main className="main bg-dark-edit">
			<Header />
			<div className="header-upgrade">
				<h1>Welcome back </h1>
				<form className="box-formData" onSubmit={(e) => updateProfil(e)}>
					<div className="formData-upgrade">
						<Input
							classWrapper={"input-wrapper"}
							getValue={(val) => setLastname(val)}
							id={"firstName"}
							type={"text"}
							placeholder={firstName}
						/>
						<Button method={() => updateProfil} nameClass="change-name right" text={"Save"} />
					</div>

					<div className="formData-upgrade">
						<Input
							getValue={(val) => setFirstname(val)}
							classWrapper={"input-wrapper"}
							id={"lastName"}
							type={"text"}
							placeholder={lastName}
						/>
						<Button method={() => redirectProfilPage} nameClass="change-name " text={"Cancel"} />
					</div>
				</form>
			</div>
			<h2 className="sr-only">Accounts</h2>
			{arrayAccount.map(({ props }, index) => (
				<Account key={`index ${index}`} props={props} />
			))}
		</main>
	);
};

export default EditName;
