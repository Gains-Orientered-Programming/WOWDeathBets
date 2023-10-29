import { getDataFromApi } from "src/services/oAuth";
import { CharacterStats } from "src/types/blizzard/characterStats";

export const getCharacterStats = async ({
  region,
  realm,
  characterName,
}: {
  region: string;
  realm: string;
  characterName: string;
}) => {
  const params = {
    "namespace": `profile-classic1x-${region}`,
    "locale": "en_GB",
  };

  const data = await getDataFromApi<CharacterStats>(
    region,
    `/profile/wow/character/${realm}/${characterName}/statistics`,
    params
  );

  return data;
};
