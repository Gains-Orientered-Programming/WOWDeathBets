'use client';

import { useForm } from 'react-hook-form';
import { registerUser } from 'src/api/user-service/register';

type Inputs = {
	username: string;
	email: string;
	password: string;
};

const RegisterForm = () => {
	const { register, handleSubmit, watch } = useForm<Inputs>();

	const onSubmit = async (data: Inputs) => {
		const result = await registerUser(data);
		console.log(result);
	};

	return (
		<div className="w-full flex justify-center mt-32">
			<form
				className="flex flex-col gap-5 w-96"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="text-4xl font-medium">Register</h1>
				<div className="flex flex-col">
					<label>Username</label>
					<input
						className="h-10 rounded text-black indent-2"
						{...register('username', {
							required: true,
						})}
					/>
				</div>
				<div className="flex flex-col">
					<label>E-mail</label>
					<input
						className="h-10 rounded text-black indent-2"
						{...register('email')}
					/>
				</div>
				<div className="flex flex-col">
					<label>Password</label>
					<input
						className="h-10 rounded text-black indent-2"
						{...register('password', {
							required: true,
						})}
					/>
				</div>
				<div>
					<button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
