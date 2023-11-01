import arrowRight from "@/public/talents/arrows/right.png";
import arrowRightGold from "@/public/talents/arrows/right--gold.png";
import arrowDown from "@/public/talents/arrows/down.png";
import arrowDownGold from "@/public/talents/arrows/down--gold.png";
import arrowRightDown from "@/public/talents/arrows/right-down.png";
import arrowRightDownGold from "@/public/talents/arrows/right-down--gold.png";
import { ArrowDir, Position } from "../types";
import { getArrowSettings } from "../positions";

const imageMap = {
  right: arrowRight,
  "right--gold": arrowRightGold,
  down: arrowDown,
  "down--gold": arrowDownGold,
  "right-down": arrowRightDown,
  "right-down--gold": arrowRightDownGold,
  "right-down-down": arrowDown,
  "right-down-down--gold": arrowDownGold,
};

type Props = {
  dir: ArrowDir;
  from: Position;
  to: Position;
  active: boolean;
};

export const Arrow = ({ dir, from, to, active }: Props) => {
  const arrowType = `${dir}${active ? "--gold" : ""}`;
  console.log(imageMap[arrowType as keyof typeof imageMap]);
  const arrowSettings = getArrowSettings(from, to, dir);
  return (
    <>
      <div
        className={
          `absolute w-[15px] z-5 block ` +
          (dir === "down"
            ? "bg-[bottom_center]"
            : dir === "right"
            ? "bg-[right_center]"
            : dir === "right-down"
            ? "bg-[right_bottom]"
            : dir === "right-down-down"
            ? "bg-[right_bottom]"
            : "")
        }
        style={{
          top: arrowSettings.top,
          left: arrowSettings.left,
          height: arrowSettings.height,
          width: arrowSettings.width,
          backgroundImage: `url("/talents/arrows/${arrowType}.png")`,
        }}
      ></div>
    </>
  );
};
