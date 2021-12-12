import Input from "../components/Input";

const Signup = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <Input classWrapper={"input-wrapper"} id={"username"} type={"text"} label={"UserName"} />
          <Input classWrapper={"input-wrapper"} id={"password"} type={"password"} label={"Password"} />
          <Input classWrapper={"input-remember"} id={"remember-me"} type={"checkbox"} label={"Remember me"} />

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};
export default Signup;
