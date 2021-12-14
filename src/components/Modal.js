import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { updateDatabse } from "../requests/updateProfil";
import Input from "./Input";
import Button from "./Button";

const Modal = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [succes, setsucces] = useState("");

	const updateProfil = (e) => {
		e.preventDefault();
		const token = JSON.parse(sessionStorage.getItem("token"));
		updateDatabse(token.tokenUser, firstname, lastname);
		setsucces("Votre modification à été pris en compte");
	};

	const closeModal = () => document.querySelector(".modal").classList.add("noDisplay");

	return ReactDOM.createPortal(
		<div className="modal noDisplay">
			<div className="content-modal">
				<form className="form-modal" onSubmit={(e) => updateProfil(e)}>
					<span className="fas fa-arrow-left"></span>
					<h1>Changer vos informations </h1>
					<Input
						getValue={(val) => setFirstname(val)}
						classWrapper={"input-wrapper"}
						id={"firstName"}
						type={"text"}
						label={"Votre nouveau nom"}
					/>

					<Input
						getValue={(val) => setLastname(val)}
						classWrapper={"input-wrapper"}
						id={"lastName"}
						type={"text"}
						label={"Votre nouveau prénom"}
					/>
					<p>{succes}</p>
					<Button nameClass={"sign-in-button"} text={"Envoyer"} />
				</form>
				<Button nameClass={"close-modal"} text={"X"} method={() => closeModal()} />
			</div>
		</div>,
		document.getElementById("modal")
	);
};
export default Modal;
