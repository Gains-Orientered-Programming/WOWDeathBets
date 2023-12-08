"use client"

// Import styles
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Images

const Nav  = ({username} : {username:string}) => {
  const pathname = usePathname();
  const navItems = [
    {
      iconIndex: 0,
      linkTxt: 'Account overview',
      link: `/profile/${username}`,
    },
    {
      iconIndex: 1,
      linkTxt: 'My bets',
      link: `/profile/${username}/mybets`,
    },
    {
      iconIndex: 2,
      linkTxt: 'New deposit ticket',
      link: `/profile/${username}/deposit-ticket`,
    },
    {
      iconIndex: 3,
      linkTxt: 'New withdraw ticket',
      link: `/profile/${username}/withdraw-ticket`,
    },
  ];
  

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