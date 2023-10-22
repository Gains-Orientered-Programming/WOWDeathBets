import { Position } from "./types";

export const getPosition = (pos: string) => {
  const position = new Map([
    ["a1", { left: "8px", top: "8px" }],
    ["a2", { left: "68px", top: "8px" }],
    ["a3", { left: "128px", top: "8px" }],
    ["a4", { left: "188px", top: "8px" }],
    ["b1", { left: "8px", top: "68px" }],
    ["b2", { left: "68px", top: "68px" }],
    ["b3", { left: "128px", top: "68px" }],
    ["b4", { left: "188px", top: "68px" }],
    ["c1", { left: "8px", top: "128px" }],
    ["c2", { left: "68px", top: "128px" }],
    ["c3", { left: "128px", top: "128px" }],
    ["c4", { left: "188px", top: "128px" }],
    ["d1", { left: "8px", top: "188px" }],
    ["d2", { left: "68px", top: "188px" }],
    ["d3", { left: "128px", top: "188px" }],
    ["d4", { left: "188px", top: "188px" }],
    ["e1", { left: "8px", top: "248px" }],
    ["e2", { left: "68px", top: "248px" }],
    ["e3", { left: "128px", top: "248px" }],
    ["e4", { left: "188px", top: "248px" }],
    ["f1", { left: "8px", top: "308px" }],
    ["f2", { left: "68px", top: "308px" }],
    ["f3", { left: "128px", top: "308px" }],
    ["f4", { left: "188px", top: "308px" }],
    ["g1", { left: "8px", top: "368px" }],
    ["g2", { left: "68px", top: "368px" }],
    ["g3", { left: "128px", top: "368px" }],
    ["g4", { left: "188px", top: "368px" }],
  ]);

  return position.get(pos as Position);
};

export const getArrowPosition = (pos: string) => {
  const position = new Map([
    ["a1", { left: "22.5px", top: "49px" }],
    ["a2", { left: "82.5px", top: "49px" }],
    ["a3", { left: "142.5px", top: "49px" }],
    ["a4", { left: "202.5px", top: "40px" }],
    ["b1", { left: "22.5px", top: "109px" }],
    ["b2", { left: "82.5px", top: "109px" }],
    ["b3", { left: "142.5px", top: "109px" }],
    ["b4", { left: "202.5px", top: "109px" }],
    ["c1", { left: "22.5px", top: "169px" }],
    ["c2", { left: "82.5px", top: "169px" }],
    ["c3", { left: "142.5px", top: "169px" }],
    ["c4", { left: "202.5px", top: "169px" }],
    ["d1", { left: "22.5px", top: "229px" }],
    ["d2", { left: "82.5px", top: "229px" }],
    ["d3", { left: "142.5px", top: "229px" }],
    ["d4", { left: "202.5px", top: "229px" }],
    ["e1", { left: "22.5px", top: "289px" }],
    ["e2", { left: "82.5px", top: "289px" }],
    ["e3", { left: "142.5px", top: "289px" }],
    ["e4", { left: "202.5px", top: "289px" }],
    ["f1", { left: "22.5px", top: "349px" }],
    ["f2", { left: "82.5px", top: "349px" }],
    ["f3", { left: "142.5px", top: "349px" }],
    ["f4", { left: "202.5px", top: "349px" }],
    ["g1", { left: "22.5px", top: "409px" }],
    ["g2", { left: "82.5px", top: "409px" }],
    ["g3", { left: "142.5px", top: "409px" }],
    ["g4", { left: "202.5px", top: "409px" }],
  ]);

  return position.get(pos as Position);
};

export const calculateHeight = (from: string, to: string) => {
  const letterTo = to.charAt(0);
  const letterFrom = from.charAt(0);
  const position = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
  ]);
  const height = new Map([
    [1, "26.5px"],
    [2, "86.5px"],
  ]);
  return height.get(position.get(letterTo)! - position.get(letterFrom)!);
};
