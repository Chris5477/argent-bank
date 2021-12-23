import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { updateDatabase } from "../requests/updateProfil";
import Input from "./Input";
import Button from "./Button";
import { useDispatch } from "react-redux";
import picture from "../img/form.png";

const Modal = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [succes, setsucces] = useState("");
	const [error, setError] = useState("");
	const myDispatch = useDispatch();

	const updateProfil = (e) => {
		e.preventDefault();
		if (firstname && lastname) {
			let token = null;
			if (sessionStorage.length) {
				token = JSON.parse(sessionStorage.getItem("token"));
			} else {
				token = JSON.parse(localStorage.getItem("token"));
			}
			updateDatabase(token.tokenUser, firstname, lastname, myDispatch);
			setError("");
			setsucces("Votre modification à été pris en compte");
		} else {
			setError("Veuillez remplir tous les champs");
		}
	};

	const closeModal = () => {
		document.querySelector(".modal").classList.add("noDisplay");
	};

	return ReactDOM.createPortal(
		<div className="modal noDisplay">
			<div className="content-modal">
				<form className="form-modal" onSubmit={(e) => updateProfil(e)}>
					<img src={picture} alt="formular icon" />
					<h1>Changer vos informations </h1>
					<Input
						getValue={(val) => setLastname(val)}
						classWrapper={"input-wrapper"}
						id={"firstName"}
						type={"text"}
						label={"Votre nouveau nom"}
					/>

					<Input
						getValue={(val) => setFirstname(val)}
						classWrapper={"input-wrapper"}
						id={"lastName"}
						type={"text"}
						label={"Votre nouveau prénom"}
					/>
					<span id="error-text">{error}</span>
					<span id="succes">{succes}</span>
					<Button nameClass={"sign-in-change"} text={"Envoyer"} />
				</form>
				<Button nameClass={"close-modal"} text={"X"} method={() => closeModal()} />
			</div>
		</div>,
		document.getElementById("modal")
	);
};
export default Modal;
