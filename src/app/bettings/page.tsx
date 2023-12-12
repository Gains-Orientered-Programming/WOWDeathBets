import { gql } from "@apollo/client";
import { getClient } from "../../lib/client";
import { Betting } from "../../types/betting-service.t";

const querry = gql`
  query GetBettings {
    bettings {
      id
      userId
      characterName
      realm
      region
      amount
    }
  }
`;

interface BettingData {
  bettings: {
    id: string;
    userId: string;
    characterName: string;
    realm: string;
    region: string;
    amount: number;
  }[];
}

const AllBettings = async () => {
  const { data } = await getClient().query<BettingData>({ query: querry });
  return (
    <div>
      <h1>allBettings</h1>
      {data
        ? data.bettings.map((betting) => (
            <div key={betting.id}>
              <h1>{betting.userId}</h1>
              <h1>{betting.characterName}</h1>
            </div>
          ))
        : null}
    </div>
  );
};

export default AllBettings;
