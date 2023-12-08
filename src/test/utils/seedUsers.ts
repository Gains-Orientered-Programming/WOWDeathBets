import axios from 'axios';
import { User } from 'src/types/user';

export const seedUsers = async () => {
	console.log('Seeding user data...');
	try {
		const response = await axios.post(
			'https://api-gateway-nyxm4.ondigitalocean.app/user-service/create-user',
			{
				username: 'seeded_test_username',
				email: 'seeded_test_email@test.dk',
				password: 'seeded_test_password',
			}
		);

		if (response.status === 201) {
			console.log('User data seeded successfully:', response.data);
			return { ...response.data, password: 'seeded_test_password' } as User;
		}
	} catch (error) {
		console.error('Error seeding user data:', error);
	}
	return {} as User;
};

export const deleteSeededUsers = async (seededUser: User) => {
	try {
		const response = await axios.delete(
			`https://api-gateway-nyxm4.ondigitalocean.app/user-service/user/by-username/${seededUser.username}`
		);
		if (response.status === 200) {
			console.log(
				`Seeded user data with username ${seededUser.username} deleted successfully.`
			);
		}
	} catch (error) {
		console.error(
			`Error deleting seeded user data with username ${seededUser.username}:`,
			error
		);
	}
};
