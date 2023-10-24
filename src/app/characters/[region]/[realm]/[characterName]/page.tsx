import Image from "next/image";
import { getCharacterEquipment } from "src/api/services/characterEquipment";
import { getCharacterProfile } from "src/api/services/characterProfile";
import { getCharacterSpecializations } from "src/api/services/characterSpecializations";
import { Talents } from "src/components/ui/talent-tree/Talents";
import { CharacterProfileSummary } from "src/types/blizzard/characterProfileSummary.t";
import ItemPanel from "./(ItemPanel)";
import TabElement from "./(tab)";
import { TabData } from "./(tab)/type";
import { wowClassColors } from "src/utils/wowClassColors";

const CharacterPage = async ({
  params,
}: {
  params: { region: string; realm: string; characterName: string };
}) => {
  const characterProfile = await getCharacterProfile(params);
  const characterSpec = await getCharacterSpecializations(params);
  const characterEquipment = await getCharacterEquipment(params);
  const categories: TabData[] = [
    {
      name: "Character Panel",
      content: <ItemPanel items={characterEquipment} />,
      param: "character-panel",
    },
    {
      name: "Talents",
      content: (
        <Talents
          specializationGroup={characterSpec.specialization_groups[0]}
          wowClass={characterProfile.character_class.name}
        />
      ),
      param: "talents",
    },
  ];

  return (
    <>
      <div className="w-[1080px] block my-0 mx-auto">
        <div className="flex-1 mx-0 my-auto">
          <div>
            <Header characterProfile={characterProfile} />
          </div>
          <div>
            <TabElement params={params} categories={categories} />
          </div>
          <div className="flex flex-col gap-5">
            <div>Name: {characterProfile.name}</div>
            <div>Gender: {characterProfile.gender.type}</div>
            <div>Faction: {characterProfile.faction.type}</div>
            <div>Class: {characterProfile.character_class.name}</div>
            <div>Race: {characterProfile.race.name}</div>
            <div>Level: {characterProfile.level}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = ({
  characterProfile,
}: {
  characterProfile: CharacterProfileSummary;
}) => {
  return (
    <>
      <div className="w-full flex">
        <div className="max-w-[1016px] pt-[48px] px-0 ">
          <div className="flex flex-col relative max-w-[1016px]">
            <div className="mb-[36px] flex flex-col">
              <div className="flex flex-row flex-nowrap gap-5">
                <div
                  style={{
                    outlineColor: wowClassColors(
                      characterProfile.character_class.name
                    ),
                  }}
                  className={
                    "w-[100px] h-[100px] flex flex-row flex-nowrap rounded-sm outline outline-2"
                  }
                >
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
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="font-bold text-2xl">
                      {characterProfile.name}
                    </div>
                    <div>
                      <span>Arms Warrior</span>
                    </div>
                  </div>
                  {characterProfile.is_ghost && (
                    <div className="ml-5">
                      <div className="bg-red-200 text-red-700 rounded-sm px-4 py-1">
                        Dead
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterPage;
