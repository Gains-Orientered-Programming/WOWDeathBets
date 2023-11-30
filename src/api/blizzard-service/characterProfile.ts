import { getDataFromApi } from "src/services/oAuth";
import { CharacterProfileSummary } from "src/types/blizzard/characterProfileSummary.t";

export const getCharacterProfile = async ({
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

  const data = await getDataFromApi<CharacterProfileSummary>(
    region,
    `/profile/wow/character/${realm}/${characterName}`,
    params
  );

  return data;
};
