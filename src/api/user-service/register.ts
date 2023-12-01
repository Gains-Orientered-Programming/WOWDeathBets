import axios, { AxiosError } from 'axios';

export const registerUser = async (registerData: {
	username: string;
	email: string;
	password: string;
}) => {
	const response = await axios
		.post(
			'https://api-gateway-nyxm4.ondigitalocean.app/user-service/create-user',
			{
				username: registerData.username,
				email: registerData.email,
				password: registerData.password,
			}
		)
		.catch((err: AxiosError) => {
			console.log(err);
		});

	return response;
};
