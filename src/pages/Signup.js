import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../redux/actionUser";
import { setValueEmail, setValuePassword } from "../redux/actionsFormLogin";
import { useState, useRef } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Loader from "../components/Loader";

const Signup = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const checkRef = useRef("");
	const myDispatch = useDispatch();
	const [errorMessage, seterrorMessage] = useState("");
	const [loader, setLoader] = useState("");
	const stateUser = useSelector((state) => state.user);

	const arrayInput = [
		{
			ref: emailRef,
			getValue: (value) => myDispatch(setValueEmail(value)),
			classWrapper: "input-wrapper",
			id: "username",
			type: "text",
			label: "UserName",
		},
		{
			ref: passwordRef,
			getValue: (value) => myDispatch(setValuePassword(value)),
			classWrapper: "input-wrapper",
			id: "password",
			type: "password",
			label: "Password",
		},
		{
			ref: checkRef,
			classWrapper: "input-remember",
			id: "remember-me",
			type: "checkbox",
			label: "Remember-me",
		},
	];

	const sendData = (e) => {
		e.preventDefault();
		seterrorMessage("");
		if (emailRef.current.value && passwordRef.current.value) {
			setLoader(<Loader />);
			myDispatch(
				apiCall({
					email: emailRef.current.value,
					password: passwordRef.current.value,
					rememberMe: document.querySelector("input[type=checkbox]").checked,
				})
			);
			setTimeout(() => {
				if (!stateUser.userData) {
					setLoader("");
					seterrorMessage("Email ou mot de passe incorrect ");
				}
			}, 1000);
		} else {
			seterrorMessage("Veuillez remplir tous les champs du formulaire");
		}
	};

	return (
		<>
			<Header />
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={(e) => sendData(e)}>
						{arrayInput.map(({ ref, getValue, classWrapper, id, type, label }, index) => (
							<Input
								ref={ref}
								getValue={getValue}
								classWrapper={classWrapper}
								id={id}
								type={type}
								label={label}
								key={`index ${index}`}
							/>
						))}
						<div className="state-request">
							<span id="error-text">{errorMessage}</span>
							{loader}
						</div>
						<Button nameClass="sign-in-button" text={"Sign In"} />
					</form>
				</section>
			</main>
		</>
	);
};

export default Signup;
