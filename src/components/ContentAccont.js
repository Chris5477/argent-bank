import Proptypes from "prop-types";

const ContentAccount = ({ title, amount, description }) => {
  return (
    <>
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-description">{description}</p>
    </>
  );
};

ContentAccount.prototype = {
  title: Proptypes.string.isRequired,
  amount: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};
export default ContentAccount;
