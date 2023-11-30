import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { UserJWT } from 'src/types/user';

export const validateSession = async (token: any) => {
	const decodedToken: UserJWT = jwtDecode(token);
	const response = await axios.get(
		`https://api-gateway-nyxm4.ondigitalocean.app/user-service/user/${decodedToken.userId}`
	);

	return response;
};
