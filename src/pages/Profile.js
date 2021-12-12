import Account from "../components/Account";
import {accounts_static} from "../data_static/accounts"

const { account1, account2, account3 } = accounts_static

const Profile = () => {
return(
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />DATA DYNAMIQUE ICI /!\</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account props={account1} />
      <Account props={account2} />
      <Account props={account3} />
     
    </main>
)
}
export default Profile;