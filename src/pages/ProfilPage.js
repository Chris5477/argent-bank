import Account from "../components/Account";

const ProfilPage = () => {

    const accounts = {
        account1 : {
            title:"Argent Bank Checking (x8349)",
            amount:"$2,082.79",
            description:"Available Balance"
        },
        account2 : {
            title:"Argent Bank Savings (x6712)",
            amount:"$10,928.42",
            description:"Available Balance"
        },
        account3 : {
            title:"Argent Bank Credit Card (x8349)",
            amount:"$184.30",
            description:"Current Balance"
        }
    }

    const {account1, account2, account3} = accounts


return(
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title={account1.title} amount={account1.amount} description={account1.description} />
      <Account title={account2.title} amount={account2.amount} description={account2.description} />
      <Account title={account3.title} amount={account3.amount} description={account3.description} />
    </main>
)
}
export default ProfilPage;