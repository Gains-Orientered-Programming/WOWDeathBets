import Link from "next/link";
import { type Talent } from "./types";
import { getIconPosition } from "./positions";
import Arrow from "./Arrow";

const Talent = ({
  talent,
  rank,
  id,
}: {
  talent: Talent;
  rank: number | undefined;
  id: number | undefined;
}) => {
  return (
    <>
      <div
        style={{
          top: getIconPosition(talent.position)?.top,
          left: getIconPosition(talent.position)?.left,
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
            target="_blank"
            className={
              "border border-amber-200 h-[36px] w-[36px] rounded-md block left-[3px] absolute top-[3px] z-20 " +
              (rank ? "grayscale-0" : "grayscale")
            }
            href={`https://www.wowhead.com/classic/spell=${
              id ? id : talent.id
            }/${talent.name.replace(" ", "-")}`}
          ></Link>
        </div>
        <span className="pointer-none bg-black border-yellow rounded bottom-[-5px] right-[-5px] text-xs absolute ">
          {rank ? rank : 0}/{talent.maxRank}
        </span>
      </div>
      <div>
        {talent.arrows &&
          talent.arrows.map((arrow, i) => (
            <Arrow key={i} active={true} {...arrow} />
          ))}
      </div>
    </>
  );
};

export default Talent;
