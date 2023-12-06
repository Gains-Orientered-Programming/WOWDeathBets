'use client';

import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from 'src/api/user-service/login';
import { useUserStore } from 'src/store/user.store';
import { UserJWT } from 'src/types/user';
import { useRouter } from 'next/navigation';
import { toast } from 'src/components/ui/Toast/use-toast';

type Inputs = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm<Inputs>();
	const [loading, setLoading] = React.useState(false);
	const [error, showError] = React.useState(false);

	const onSubmit = async (data: Inputs) => {
		//TODO: Add loading spinner
		setLoading(true);
		try {
			const token = await loginUser(data.email, data.password);
			if (token) {
				const decodedToken: UserJWT = jwtDecode(token);
				toast({
					title: 'Logged in',
					description: `Welcome back ${decodedToken.username}`,
				});
			}
			setLoading(false);
			router.push('/');
		} catch (error) {
			console.log(error);
			showError(true);
		}
	};

	return (
		<div className="w-full flex justify-center mt-32">
			<form
				className="flex flex-col gap-5 w-96"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="text-4xl font-medium">Login</h1>
				<div className="flex flex-col">
					<label>E-mail</label>
					<div
						className={`flex flex-col ${
							error ? 'rounded border-2 border-rose-500' : ''
						}`}
					>
						<input
							className="h-10 rounded text-black indent-2"
							{...register('email')}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label>Password</label>
					<div
						className={`flex flex-col ${
							error ? 'rounded border-2 border-rose-500' : ''
						}`}
					>
						<input
							type="password"
							className="h-10 rounded text-black indent-2"
							{...register('password')}
						/>
					</div>
				</div>
				<div>
					<button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
						Login
					</button>
				</div>
				{error && (
					<div className="text-red-500 w-full flex justify-center items-center">
						Wrong password or email
					</div>
				)}
				<div>
					<div className="flex flex-row items-center">
						<hr className="w-full bg-white" />
						<span className="px-2">or</span>
						<hr className="w-full bg-white" />
					</div>
					<div className="mt-5">
						<Link href={'/register'}>
							<button className="bg-neutral-600 p-2 w-full hover:bg-neutral-500 rounded text-white h-10">
								Register
							</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
