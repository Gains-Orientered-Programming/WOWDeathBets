export type User = {
	userId: string;
	username: string;
	email: string;
	currency: number;
	password?: string;
};

export type UserJWT = {
	userId: string;
	username: string;
	email: string;
	currency: number;
};
