import { getDataFromApi } from "src/services/oAuth";
import { CharacterEquipment } from "src/types/blizzard/characterEquipment.t";

export const getCharacterEquipment = async ({
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

  const data = await getDataFromApi<CharacterEquipment>(
    region,
    `/profile/wow/character/${realm}/${characterName}/equipment`,
    params
  );

  return data;
};
