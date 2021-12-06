import FormLogin from "../components/FormLogin";

const SignUp = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <span className="fa fa-user-circle sign-in-icon"></span>
        <h1>Sign In</h1>
        <FormLogin />
      </section>
    </main>
  );
};

export default SignUp;
