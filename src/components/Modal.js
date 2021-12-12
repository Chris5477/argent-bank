import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { updateDatabse } from "../requests/updateProfil";

const Modal = () => {
	const [firstname, setFirstname] = useState();
	const [lastname, setLastname] = useState();

	const updateProfil = (e) => {
		e.preventDefault();
		const token = JSON.parse(sessionStorage.getItem("token"));
		updateDatabse(token.tokenUser, firstname, lastname);
	};

	const closeModal = () => document.querySelector(".modal").classList.add("noDisplay");

	return ReactDOM.createPortal(
		<div className="modal noDisplay">
			<div className="content-modal">
				<form className="updateDataUser" onSubmit={(e) => updateProfil(e)}>
					<div className="formData">
						<label htmlFor="firstName">Votre nouveau nom :</label>
						<input
							onChange={(e) => setFirstname(e.target.value)}
							type="text"
							id="firstName"
							value={firstname}
						/>
					</div>
					<label htmlFor="lastName">Votre nouveau Prénom :</label>
					<input
						onChange={(e) => setLastname(e.target.value)}
						type="text"
						id="lastName"
						value={lastname}
					/>

					<button className="sign-in-button">Envoyer</button>
				</form>
				<button onClick={() => closeModal()}>X</button>
			</div>
		</div>,
		document.getElementById("modal")
	);
};
export default Modal;
