import Link from "next/link";
import { type Talent } from "./types";
import { getPosition } from "./positions";
import Arrow from "./Arrow";

const Talent = ({
  talent,
  rank,
}: {
  talent: Talent;
  rank: number | undefined;
}) => {
  return (
    <>
      <div
        style={{
          top: getPosition(talent.position)?.top,
          left: getPosition(talent.position)?.left,
        }}
        className={`z-5 filter-none absolute block outline-none`}
      >
        <div className="h-[44px] w-[44px] relative z-0 block">
          <ins
            className={
              "h-[36px] w-[36px] absolute left-1 top-1 rounded bg-no-repeat bg-contain z-5 block " +
              (rank ? "grayscale-0" : "grayscale")
            }
            style={{
              backgroundImage: `url("${talent.icon}")`,
            }}
          ></ins>
          <del
            className="h-[44px] w-[44px] bg-no-repeat block left-0 absolute top-0 z-10 line-through outline-none"
            style={{ backgroundImage: `url("/default.png")` }}
          ></del>
          <Link
            className={
              "border border-amber-200 h-[36px] w-[36px] rounded-md block left-[3px] absolute top-[3px] z-20 " +
              (rank ? "grayscale-0" : "grayscale")
            }
            href={"https://www.wowhead.com/classic/spell=12867/deep-wounds"}
          ></Link>
        </div>
        <span className="pointer-none bg-black border-yellow rounded bottom-[-5px] right-[-5px] text-xs absolute ">
          {rank ? rank : 0}/{talent.maxRank}
        </span>
      </div>
      {talent.arrows &&
        talent.arrows.map((arrow, i) => (
          <Arrow key={i} active={true} {...arrow} />
        ))}
    </>
  );
};

export default Talent;
