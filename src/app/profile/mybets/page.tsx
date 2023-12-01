// src/app/profile/mybets/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Bet {
  userId: string;
  characterName: string;
  region: string;
  realm: string;
  amount: number;
}

interface MyBetsProps {
  allBets: Bet[] | undefined;
}

const MyBets: React.FC<MyBetsProps> = () => {
  const [allBets, setAllBets] = useState<Bet[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBetData = async () => {
      try {
        const response = await fetch('https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings');
        if (!response.ok) {
          throw new Error('Failed to fetch all bets');
        }
        const fetchedBets: Bet[] = await response.json();
        setAllBets(fetchedBets);
      } catch (error) {
        setError('Failed to fetch all bets');
      } finally {
        setLoading(false);
      }
    };

    fetchBetData();
  }, []);

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
            {loading && <li>Loading...</li>}
            {error && <li>{error}</li>}
            {allBets &&
              allBets.map((bet, index) => (
                <li key={index}>{bet.characterName} - {bet.amount}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyBets;
