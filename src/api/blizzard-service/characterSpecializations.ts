import { getDataFromApi } from "src/services/oAuth";
import { CharacterSpecializations } from "src/types/blizzard/characterSpecializations.t";

export const getCharacterSpecializations = async ({
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

  const data = await getDataFromApi<CharacterSpecializations>(
    region,
    `/profile/wow/character/${realm}/${characterName}/specializations`,
    params
  );

  return data;
};
