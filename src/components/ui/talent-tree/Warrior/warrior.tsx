import Image from "next/image";
import Arrow from "../util/arrow";
import Icon from "../util/icon";
import { data } from "./data";

const Warrior_TalentTree = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col bg-white max-w-[328px] w-[300px]">
          <div className="bg-gray-200 h-10 w-full flex items-center font-lg gap-[10px] px-2">
            <Image
              src={data.Arms.icon}
              alt="Arms icon"
              className="h-[30px] w-[30px] rounded-full"
              width={100}
              height={100}
            />
            <b>Arms</b>
            <span className="flex-1 text-right">31 / 51</span>
          </div>
          <div
            className="w-full"
            style={{
              backgroundImage: `url("${data.Arms.backgorund}")`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="h-[420px] w-[240px] my-0 mx-auto  relative">
              {data.Arms.talents.map((talent) => (
                <Icon
                  key={talent.name}
                  image={talent.icon}
                  maxLevel={talent.maxRank}
                  level={talent.reqPoints}
                  posX={talent.left}
                  posY={talent.top}
                />
              ))}
              <Arrow posX="142.5px" posY="49px" />
              <Arrow posX="82.5px" posY="289px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warrior_TalentTree;
