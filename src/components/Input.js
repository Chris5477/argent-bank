import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(({ classWrapper, id, type, label, getValue, placeholder }, ref) => {
	return (
		<div className={classWrapper}>
			<label htmlFor={id}>{label}</label>
			<input
				ref={ref}
				onChange={(e) => getValue && getValue(e.target.value)}
				type={type}
				id={id}
				placeholder={placeholder}
			/>
		</div>
	);
});
Input.propTypes = {
	classWrapper: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string,
	getValue: PropTypes.func,
	placeholder: PropTypes.string,
};
export default Input;
