export type User = {
	_id: string;
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
