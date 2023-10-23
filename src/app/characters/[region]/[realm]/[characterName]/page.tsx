import Image from "next/image";
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
      <div className="w-full flex">
        <div className="max-w-[1016px] pt-[48px] px-4 pb-[100px]">
          <div className="flex flex-col relative max-w-[1016px]">
            <div className="mb-[36px] flex flex-col">
              <div className="flex flex-row flex-nowrap gap-5">
                <div className="bg-yellow-400 w-[100px] h-[100px] flex flex-row flex-nowrap rounded-sm outline outline-2 outline-yellow-400">
                  <div className="bg-blue-700 flex flex-row flex-nowrap">
                    <Image
                      src={`https://wow.zamimg.com/images/wow/icons/large/race_${characterProfile.race.name.toLowerCase()}_${characterProfile.gender.type.toLowerCase()}.jpg`}
                      alt="race image"
                      className={"z-50 w-full h-full"}
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
                <div className="flex flex-row flex-nowrap items-center">
                  <h1 className="items-start flex font-bold mt-0 mx-0 mb-[12px] text-2xl">
                    {characterProfile.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>Name: {characterProfile.name}</div>
        <div>Gender: {characterProfile.gender.type}</div>
        <div>Faction: {characterProfile.faction.type}</div>
        <div>Class: {characterProfile.character_class.name}</div>
        <div>Race: {characterProfile.race.name}</div>
        <div>Level: {characterProfile.level}</div>
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
