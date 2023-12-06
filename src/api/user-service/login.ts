import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { UserJWT } from 'src/types/user';
import { useUserStore } from 'src/store/user.store';

const loginUser = async (email: string, password: string) => {
	try {
		const response = await axios.post(
			`https://api-gateway-nyxm4.ondigitalocean.app/user-service/login`,
			{
				email: email,
				password: password,
			}
		);

		const token = response.data.token;

		if (token) {
			localStorage.setItem('jwt', token);
			const decodedToken: UserJWT = jwtDecode(token);
			useUserStore.getState().setUser({
				_id: decodedToken.userId,
				username: decodedToken.username,
				email: decodedToken.email,
				currency: decodedToken.currency,
			});
			return token;
		} else console.error('Login failed');
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export default loginUser;
