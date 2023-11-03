import { ArrowDir, Position } from "../types";
import { getArrowSettings } from "../positions";

const imageMap = {
  right: "/talents/arrows/right.png",
  "right--gold": "/talents/arrows/right--gold.png",
  down: "/talents/arrows/down.png",
  "down--gold": "/talents/arrows/down--gold.png",
  "right-down": "/talents/arrows/right-down.png",
  "right-down--gold": "/talents/arrows/right-down--gold.png",
  "right-down-down": "/talents/arrows/down.png",
  "right-down-down--gold": "/talents/arrows/down--gold.png",
};

type Props = {
  dir: ArrowDir;
  from: Position;
  to: Position;
  active: boolean;
};

export const Arrow = ({ dir, from, to, active }: Props) => {
  const arrowType = `${dir}${active ? "--gold" : ""}`;

  const arrowSettings = getArrowSettings(from, to, dir);
  return (
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
        backgroundImage: `url(${imageMap[arrowType as keyof typeof imageMap]})`,
      }}
    ></div>
  );
};
