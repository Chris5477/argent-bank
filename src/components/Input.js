import React from "react";

const Input = React.forwardRef(({ classWrapper, id, type, label, getValue }, ref) => {
	return (
		<div className={classWrapper}>
			<label htmlFor={id}>{label}</label>
			<input ref={ref} onChange={(e) => getValue(e.target.value)} type={type} id={id} />
		</div>
	);
});
export default Input;
