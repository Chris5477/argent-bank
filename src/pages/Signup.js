import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { apiCall } from "../redux/actionUser";
import { setValueEmail, setValuePassword } from "../redux/actionsFormLogin";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const Signup = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const checkRef = useRef("");
	const myDispatch = useDispatch();
	const history = useHistory();

	const sendData = (e) => {
		e.preventDefault();
		myDispatch(
			apiCall({
				email: emailRef.current.value,
				password: passwordRef.current.value,
				rememberMe: document.querySelector("input[type=checkbox]").checked,
			})
		);

		history.push("/profil");
	};

	return (
		<>
			<Header />
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={(e) => sendData(e)}>
						<Input
							ref={emailRef}
							getValue={(value) => myDispatch(setValueEmail(value))}
							classWrapper={"input-wrapper"}
							id={"username"}
							type={"text"}
							label={"UserName"}
						/>
						<Input
							ref={passwordRef}
							getValue={(value) => myDispatch(setValuePassword(value))}
							classWrapper={"input-wrapper"}
							id={"password"}
							type={"password"}
							label={"Password"}
						/>
						<Input
							ref={checkRef}
							classWrapper={"input-remember"}
							id={"remember-me"}
							type={"checkbox"}
							label={"Remember me"}
						/>
						<Button nameClass="sign-in-button" text={"Sign In"} />
					</form>
				</section>
			</main>
		</>
	);
};

export default Signup;
