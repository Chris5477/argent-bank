import Button from "./Button";
import ContentAccount from "./ContentAccont";
import Proptypes from "prop-types";

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <ContentAccount title={title} amount={amount} description={description} />
      </div>
      <div className="account-content-wrapper cta">
        <Button nameClass={"transaction-button"} text={"View transactions"} />
      </div>
    </section>
  );
};

Account.prototype = {
  title: Proptypes.string.isRequired,
  amount: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};

export default Account;
