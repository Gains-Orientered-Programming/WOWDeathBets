import { gql } from "@apollo/client";
import { getClient } from "../../lib/client";
import { Betting } from "../../types/betting-service.t";

const querry = gql`
  query {
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

interface Shit {
  id: string;
  userId: string;
  characterName: string;
  realm: string;
  region: string;
  amount: number;
}

const AllBettings = async () => {
  const { data } = await getClient().query({ query: querry });
  return (
    <div>
      <h1>allBettings</h1>
      {data
        ? data.bettings.map((betting: any) => (
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
