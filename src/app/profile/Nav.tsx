"use client"

// Import styles
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Images

const Nav: React.FC = () => {
  const navItems = navItems_landlord;
  const pathname = usePathname();

  return (
    <nav className="flex flex-col text-white w-96 ml-4 bg-blue-900 border border-blue-800 rounded-md p-4">
      {navItems.map((navLink, i) => (
        <Link key={i} href={navLink.link} as={navLink.link} passHref>
          <div
            className={`py-2 px-4 mb-2 rounded-md transition-colors cursor-pointer ${
              pathname === navLink.link
                ? 'bg-blue-700'
                : 'hover:bg-blue-700 focus:bg-blue-700'
            }`}
          >
            {navLink.linkTxt}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

const navItems_landlord = [
  {
    iconIndex: 0,
    linkTxt: 'Account overview',
    link: '/profile',
  },
  {
    iconIndex: 1,
    linkTxt: 'My bets',
    link: '/profile/mybets',
  },
  {
    iconIndex: 2,
    linkTxt: 'New deposit ticket',
    link: '/profile/depositticket',
  },
  {
    iconIndex: 3,
    linkTxt: 'New withdraw ticket',
    link: '/profile/withdrawticket',
  },
];
