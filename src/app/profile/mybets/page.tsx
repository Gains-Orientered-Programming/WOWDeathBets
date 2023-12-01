// src/app/profile/mybets/page.tsx
import React from 'react';
import Image from 'next/image';

interface Bet {
  characterName: string;
  amount: number;
  // Add any other properties based on your actual data structure
}

interface MyBetsProps {
  allBets: Bet[];
}

const MyBets: React.FC<MyBetsProps> = ({ allBets }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-5 w-96">
        <div className='flex flex-col items-center w-full'>
          <h1 className="text-4xl font-medium">Johnny's Profile</h1>
          <div className='mt-12'>
            <div className=''>
              <Image src={"/pepe.webp"} width="100" height="100" alt='Picture of Pasha' />
            </div>
          </div>
        </div>

        {/* Section for Bets */}
        <div className="flex flex-col w-full items-start">
          <h2>Bets</h2>
          <ul>
            {allBets.map((bet, index) => (
              <li key={index}>{bet.characterName} - {bet.amount}</li>
            ))}
          </ul>
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
  );
};

export default MyBets;

export const getServerSideProps = async () => {
  try {
    const response = await fetch('http://your-api-server/api/all-bets');
    if (!response.ok) {
      throw new Error('Error fetching all bets');
    }

    const allBets: Bet[] = await response.json();

    return {
      props: {
        allBets,
      },
    };
  } catch (error) {
    console.error('Error fetching data:');

    return {
      props: {
        allBets: [],
      },
    };
  }
};
