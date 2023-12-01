import { getCharacterProfile } from "src/api/blizzard-service/characterProfile";
import Form from "./Form";
import { calculatePayout } from "src/utils/payoutAlogrithm";

const Bet = async ({
  params,
}: {
  params: { region: string; realm: string; characterName: string };
}) => {
  const characterProfile = await getCharacterProfile(params);
  const payout = calculatePayout(characterProfile.level);

  return (
    <div className="w-full">
      <Form characterData={params} payout={payout} />
    </div>
  );
};

export default Bet;
