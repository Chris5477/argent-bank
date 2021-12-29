import { useSelector } from "react-redux";
import Error from "./Error";
import UserPage from "../components/UserPage";

const Profile = () => {
	// ALLOWS TO ACCESS TO STORE
	const userData = useSelector((state) => state.user);

	let fullNameUser = `${userData.dataUser.firstName} ${userData.dataUser.lastName}`;

	// IF USERDATA.ERROR IS EMPTY , REDIRECT ON ERROR PAGE , OTHERWISE ON USER PAGE
	let contentProfilePage = userData.error ? <Error /> : <UserPage userName={fullNameUser} />;

	return contentProfilePage;
};
export default Profile;
