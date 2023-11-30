import { User } from 'src/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
	user: User | null;
	setUser: (user: User) => void;
	resetState: () => void;
};

const initialState = {
	user: null,
};

export const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			...initialState,
			setUser: (user) => set({ user: user }),
			resetState: () => set({ ...initialState }),
		}),
		{
			name: 'user-storage',
		}
	)
);
