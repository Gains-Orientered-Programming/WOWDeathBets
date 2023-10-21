import { url } from "inspector";

type ArrowProps = {
  posY: string;
  posX: string;
};

const Arrow = (props: ArrowProps) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/down2.png")`,
          top: props.posY,
          left: props.posX,
        }}
        className="z-5 h-[86.5px] w-[15px] bg-[bottom_center] absolute block outline-none"
      ></div>
    </>
  );
};

export default Arrow;
