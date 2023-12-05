import { useUserStore } from 'src/store/user.store';

export const logout = () => {
	try {
		localStorage.removeItem('jwt');
		useUserStore.getState().resetState();
	} catch (error) {
		throw error;
	}
};
