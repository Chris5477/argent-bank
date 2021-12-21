import { useSelector } from "react-redux";
import Error from "./Error";
import UserPage from "../components/UserPage";

const Profile = () => {
	const userData = useSelector((state) => state.user);
	let fullNameUser = `${userData.dataUser.firstName} ${userData.dataUser.lastName}`;

	let contentProfilePage = userData.error ? <Error /> : <UserPage userName={fullNameUser} />;

	return contentProfilePage;
};
export default Profile;
