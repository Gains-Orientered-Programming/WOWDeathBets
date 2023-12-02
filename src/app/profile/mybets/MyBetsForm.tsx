"use client"


import React, { useEffect, useState } from 'react';


interface Bet {
  userId: string;
  characterName: string;
  region: string;
  realm: string;
  amount: number;
}

const MyBetsForm: React.FC = () => {
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
  );
};

export default MyBetsForm;
