import { getCharacterProfile } from "src/api/services/characterProfile";
import { getCharacterSpecializations } from "src/api/services/characterSpecializations";
import { Talents } from "src/components/ui/talent-tree/Talents";
import Warrior from "src/components/ui/talent-tree/Warrior";

const CharacterPage = async ({
  params,
}: {
  params: { region: string; realm: string; characterName: string };
}) => {
  const characterProfile = await getCharacterProfile(params);
  const characterSpec = await getCharacterSpecializations(params);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>Name: {characterProfile.name}</div>
        <div>Gender: {characterProfile.gender.type}</div>
        <div>Faction: {characterProfile.faction.type}</div>
        <div>Class: {characterProfile.character_class.name}</div>
      </div>
      <div className="mt-10">
        <h1>Talents</h1>
        <Talents
          specializationGroup={characterSpec.specialization_groups[0]}
          wowClass={characterProfile.character_class.name}
        />
      </div>
    </>
  );
};

export default CharacterPage;
