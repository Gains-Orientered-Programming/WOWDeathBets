// src/app/profile/mybets/page.tsx
import React from 'react';
import MyBetsForm from './MyBetsForm';
import Image from 'next/image';

const MyBetsPage: React.FC = () => {
  return (
    <div>
          <div className="flex flex-col gap-5 w-96">
        <div className='flex flex-col items-center w-full'>
          <h1 className="text-4xl font-medium">Johnny's Profile</h1>
          <div className='mt-12'>
            <div className=''>
              <Image src={"/pepe.webp"} width="100" height="100" alt='Picture of Pasha' />
            </div>
          </div>
        </div>
        </div>
        <div className='my-5'>
        <h1>My Bets:</h1>
        </div>
      <MyBetsForm />
    </div>
  );
};

export default MyBetsPage;
