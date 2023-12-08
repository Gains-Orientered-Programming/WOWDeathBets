"use client"


import Bet from '@/app/characters/[region]/[realm]/[characterName]/bet/page';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Betting } from 'src/types/betting-service.t';


interface Bet {
  userId: string;
  characterName: string;
  region: string;
  realm: string;
  amount: number;
}

    const MyBets = ({
        betData,
      }: {
        betData: Betting;
      }) => {
        const [loading, setLoading] = React.useState(false);
      

  return (
    <div className="w-full flex justify-center">
  

        {/* Section for Bets */}
        <div className="flex flex-col w-full items-start">
          <h2>Bets</h2>
          <ul>
          {loading && <li>Loading...</li>}
          {betData && (
            <li>{betData.characterName} - {betData.amount}</li>
          )}
        </ul>
        </div>
      </div>
  );
};

export default MyBets;
