import React from 'react';
import Image from 'next/image';
// import User from '../types/User';

/* type ProfileFormProps = {
  user: User;
};
 */
const ProfileForm: React.FC = ({ }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-5 w-96">
        <div className='flex flex-col items-center w-full'>
            <h1 className="text-4xl font-medium">Johnny's Profile</h1>
            <div className='mt-12'>
            <div className=''>
                <Image src={"/pepe.webp"} width="100" height="100" alt='Picture of Pasha'/>
            </div>
        </div>
        

        {/* Section for Tickets */}
        <div className="flex flex-col w-full items-start">
          <h2>Tickets</h2>
          <li>fed c</li>
          <li>small c</li>
   {/*        <ul>
            {user.tickets.map((ticket, index) => (
              <li key={index}>{ticket}</li>
            ))}
          </ul> */}
        </div>

        {/* Section for Bets */}
        <div className="flex flex-col w-full items-start">
          <h2>Bets</h2>
          <li>All in på Frostper</li>
          <li>Fat c</li>
       {/*    <ul>
            {user.bets.map((bet, index) => (
              <li key={index}>{bet}</li>
            ))}
          </ul> */}
        </div>

        {/* Add any additional profile sections as needed */}
        {/* For example:
        <div className="flex flex-col">
          <h2>Additional Section</h2>
          <p>Additional information...</p>
        </div>
        */}
      </div>
    </div>
    </div>
  );
};

export default ProfileForm;
