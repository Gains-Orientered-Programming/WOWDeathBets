import axios from 'axios';

import { UserJWT } from 'src/types/user';
import { useUserStore } from 'src/store/user.store';
import { jwtDecode } from 'jwt-decode';

export const loginUser = async (email: string, password: string) => {
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
			return token;
		} else console.error('Login failed');
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};
