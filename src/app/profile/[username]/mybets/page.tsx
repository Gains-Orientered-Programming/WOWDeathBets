// src/app/profile/mybets/page.tsx
import React from 'react';
import MyBetsForm from './Mybets';
import Image from 'next/image';
import { getBettingsByUserId } from "src/api/betting-services";
import { useUserStore } from 'src/store/user.store';
import { getUserByUsername } from 'src/api/user-service';


const MyBetsPage = async ({params,}: {params: {username:string}}) => {
const user = await getUserByUsername(params.username);
const bettings = await getBettingsByUserId(user._id);


  return (
    <div>
          <div className="flex flex-col gap-5 w-96">
        <div className='flex flex-col items-center w-full'>
          <h1 className="text-4xl font-medium">{user.username}</h1>
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
        {bettings?.map((bet)=>
        (
            <MyBetsForm betData={bet}/>
        ))}       
         
      
    </div>
  );
};

export default MyBetsPage;
