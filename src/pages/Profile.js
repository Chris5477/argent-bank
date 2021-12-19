import { useSelector } from "react-redux";
import Error from "./Error";
import Loader from "../components/Loader";
import UserPage from "../components/UserPage";

const Profile = () => {
	const userData = useSelector((state) => state.user);
	let fullNameUser = `${userData.dataUser.firstName} ${userData.dataUser.lastName}`;

	let contentProfilePage = null;

	if (userData.isLoad) {
		contentProfilePage = <Loader />;
	} else if (userData.error) {
		contentProfilePage = <Error />;
	} else {
		contentProfilePage = <UserPage userName={fullNameUser} />;
	}
	return contentProfilePage;
};
export default Profile;
