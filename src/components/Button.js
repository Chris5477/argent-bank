const Button = ({ nameClass, text, method }) => {
	const button = method ? (
		<button onClick={() => method()} className={nameClass}>
			{text}
		</button>
	) : (
		<button className={nameClass}>{text}</button>
	);

	return button;
};
export default Button;
