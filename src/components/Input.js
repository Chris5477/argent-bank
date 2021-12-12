const Input = ({ classWrapper, id, type = "text", label }) => {
  return (
    <div className={classWrapper}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};
export default Input;
