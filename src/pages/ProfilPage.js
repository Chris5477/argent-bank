import Account from "../components/Account";
import { useSelector } from "react-redux";
import { accounts_static } from "../data_static/accounts";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ProfilPage = () => {
  const myData = useSelector((state) => state.user);
  const { account1, account2, account3 } = accounts_static;

  const displayModal = () => {
    document.querySelector(".modal").classList.remove("noDisplay");
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {myData.dataUser.firstName}
        </h1>
        <Button nameClass={"edit-button"} text={"Edit Name"} />
        <button className="portal" onClick={() => displayModal()}>
          Afficher modal
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title={account1.title} amount={account1.amount} description={account1.description} />
      <Account title={account2.title} amount={account2.amount} description={account2.description} />
      <Account title={account3.title} amount={account3.amount} description={account3.description} />
      <Modal />
    </main>
  );
};
export default ProfilPage;
