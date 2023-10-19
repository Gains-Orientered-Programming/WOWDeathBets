import { getCharacterProfile } from "src/api/services/characterProfile";

const CharacterPage = async ({
  params,
}: {
  params: { region: string; realm: string; characterName: string };
}) => {
  const characterProfile = await getCharacterProfile(params);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>gender: {characterProfile.gender.type}</div>
        <div>faction: {characterProfile.faction.type}</div>
      </div>
    </>
  );
};

export default CharacterPage;
