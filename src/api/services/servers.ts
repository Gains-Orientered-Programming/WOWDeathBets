import { getDataFromApi } from "src/services/oAuth";
import { Server } from "src/types/blizzard/server.t";

export const getServers = async ({ region }: { region: string }) => {
  const params = {
    "namespace": `dynamic-classic1x-${region}`,
    "locale": "en_GB",
  };

  const data = await getDataFromApi<Server>(
    region,
    `/data/wow/realm/index`,
    params
  );

  const hardcoreRealmList = [
    "nekrosh",
    "stitches",
    "defias-pillager",
    "skull-rock",
  ];

  const hardcoreRealms = data.realms.filter((realm) =>
    hardcoreRealmList.includes(realm.slug)
  );

  return hardcoreRealms;
};
