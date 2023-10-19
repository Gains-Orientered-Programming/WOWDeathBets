import { getDataFromApi } from "src/services/oAuth";
import { CharacterProfileSummary } from "src/types/blizzard/characterProfileSummary.t";

export async function GET(request: Request) {
  const params = {
    "namespace": "profile-classic1x-eu",
    "locale": "eu_GB",
  };
  const data = await getDataFromApi<CharacterProfileSummary>(
    "eu",
    `/profile/wow/character/nekrosh/frostper`,
    params
  );

  return new Response(JSON.stringify(data), { status: 200 });
}
