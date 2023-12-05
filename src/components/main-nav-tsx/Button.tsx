'use client';

import Link from 'next/link';
import { useUserStore } from 'src/store/user.store';
import { logout } from 'src/utils/logout';
import { useToast } from '../ui/Toast/use-toast';

const NavbarButton = () => {
	const user = useUserStore((state) => state.user);
	const { toast } = useToast();

	return (
		<>
			{!user?.username ? (
				<ListElement href={'/login'}>Login</ListElement>
			) : (
				<div className="flex">
					<ListElement href={'/'}>
						<button
							onClick={() => {
								try {
									logout();
								} catch (error) {
									console.error();
								}
								toast({
									title: 'Logged out',
									description: 'You have been logged out',
									variant: 'destructive',
								});
							}}
						>
							Logout
						</button>
					</ListElement>
					<ListElement href={'/profile'}>{user.username}</ListElement>
				</div>
			)}
		</>
	);
};

const ListElement = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<Link href={href}>
			<li className="hover:bg-neutral-800 hover:text-white rounded-md py-2 px-4 text-sm duration-100 cursor-pointer">
				{children}
			</li>
		</Link>
	);
};

export default NavbarButton;
