import Image from "next/image";
import { Specialization } from "src/types/blizzard/characterSpecializations.t";
import { TalentData } from "./types";
import { getTreeData } from "./selectors";
import Talent from "./Talent";

const TalentTree = ({
  specialization,
  data,
  name,
}: {
  specialization: Specialization | undefined;
  data: TalentData;
  name: string;
}) => {
  const treeData = getTreeData(data, name);

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col bg-white max-w-[328px] w-[300px]">
          <div className="bg-neutral-800 h-10 w-full flex items-center font-lg gap-[10px] px-2">
            <Image
              src={treeData.icon}
              alt="Arms icon"
              className="h-[30px] w-[30px] rounded-full"
              width={100}
              height={100}
            />
            <b>{treeData.name}</b>
            <span className="flex-1 text-right">
              {specialization ? specialization.spent_points : 0} / 51
            </span>
          </div>
          <div
            className="w-full"
            style={{
              backgroundImage: `url("${treeData.background}")`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="h-[420px] w-[240px] my-0 mx-auto relative">
              <>
                {Object.values(treeData.talents).map((talent) => (
                  <Talent
                    key={talent.name}
                    talent={talent}
                    rank={
                      specialization
                        ? specialization.talents.find(
                            (item) =>
                              item.spell_tooltip.spell.name === talent.name
                          )?.talent_rank
                        : undefined
                    }
                  />
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentTree;
