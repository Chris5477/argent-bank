import { useEffect } from "react";
import { connect } from "react-redux";
import { getDataUser } from "../redux/actions/users";
import FormLogin from "../components/FormLogin";

const SignUp = ({infoUser, getData}) => {

  useEffect(() => {
    getData()
  }, [getData])



  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <span className="fa fa-user-circle sign-in-icon"></span>
        <h1>Sign In</h1>
        <FormLogin dataUser={infoUser} />
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    infoUser : state.infoUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData : () => dispatch(getDataUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
