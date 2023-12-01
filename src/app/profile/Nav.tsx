"use client"

import Link from 'next/link';
import router, { usePathname } from 'next/navigation';
import React from 'react';


// Images


const Nav: React.FC= () => {
  const navItems = navItems_landlord; // Adjustments for determining role will be added later
  const pathname = usePathname();

  return (
    <nav className='flex flex-col text-[White] w-96 ml-4 bg-red-500'>
      {navItems.map((navLink, i) => {

        return (
          <Link key={i}  href={ navLink.link } className={pathname == navLink.link ? "bg-blue-400" : ""} >
            <div className=''>
              { navLink.linkTxt }
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

const navItems_landlord = [
  {
    iconIndex: 0,
    linkTxt: "Account overview",
    link: '/profile'
  },
  {
    iconIndex: 1,
    linkTxt: "Ticket Details",
    link: '/profile/mytickets'
  },
  {
    iconIndex: 2,
    linkTxt: "My bets",
    link: '/profile/mybets'
  },
  {
    iconIndex: 3,
    linkTxt: "fat cock",
    link: '/fatcock'
  },
];
