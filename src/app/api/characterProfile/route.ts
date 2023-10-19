import { getDataFromApi } from "src/services/oAuth";
import { CharacterProfileSummary } from "src/types/blizzard/characterProfileSummary.t";

export async function GET(
  request: Request,
  context: { params: { region: string; realm: string; characterName: string } }
) {
  const params = {
    "namespace": `profile-classic1x-${context.params.region}`,
    "locale": "eu_GB",
  };

  const data = await getDataFromApi<CharacterProfileSummary>(
    context.params.region,
    `/profile/wow/character/${context.params.realm}/${context.params.characterName}}`,
    params
  );

  return new Response(JSON.stringify(data), { status: 200 });
}
