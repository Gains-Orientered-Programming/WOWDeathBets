import Link from "next/link";

type ImageProps = {
  image: string;
  posY: string;
  posX: string;
  maxLevel: number;
  level: number;
};

const Icon = (props: ImageProps) => {
  return (
    <>
      <div
        style={{ top: props.posY, left: props.posX }}
        className={`z-5 filter-none absolute block outline-none`}
      >
        <div className="h-[44px] w-[44px] relative z-0 block">
          <ins
            className="h-[36px] w-[36px] absolute left-1 top-1 rounded bg-no-repeat bg-contain z-5 block"
            style={{
              backgroundImage: `url("${props.image}")`,
            }}
          ></ins>
          <del
            className="h-[44px] w-[44px] bg-no-repeat block left-0 absolute top-0 z-10 line-through outline-none"
            style={{ backgroundImage: `url("/default.png")` }}
          ></del>
          <Link
            className="border border-amber-200 h-[36px] w-[36px] rounded-md block left-[3px] absolute top-[3px] z-20"
            href={"https://www.wowhead.com/classic/spell=12867/deep-wounds"}
          ></Link>
        </div>
        <span className="pointer-none bg-black border-yellow rounded bottom-[-5px] right-[-5px] text-xs absolute ">
          {props.level}/{props.maxLevel}
        </span>
      </div>
    </>
  );
};

export default Icon;
