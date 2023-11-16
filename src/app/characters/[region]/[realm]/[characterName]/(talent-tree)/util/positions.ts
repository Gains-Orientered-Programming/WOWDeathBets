import { Position } from "./types";

export const getIconPosition = (pos: string) => {
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

export const getRightArrowSettings = (from: string, to: string) => {
  const position = new Map([
    ["a2", { left: "109px", top: "22.5px" }],
    ["e2", { left: "109px", top: "262.5px" }],
    ["e3", { left: "169px", top: "262.5px" }],
  ]);
  const pos = position.get(from as Position);

  return { ...pos, height: "15px", width: "26.5px" };
};

export const getRightDownSettings = (from: string, to: string) => {
  const position = new Map([
    ["c3", { left: "169px", top: "142.5px" }],
    ["d3", { left: "169px", top: "203.5px" }],
  ]);
  const pos = position.get(from as Position);

  return { ...pos, height: "15px", width: "48.5px" };
};

export const getRightDownDownSettings = (from: string, to: string) => {
  const postition = new Map([
    ["c4", { left: "202.5px", top: "156.5px" }],
    ["d4", { left: "202.5px", top: "215.5px" }],
  ]);

  const pos = postition.get(from as Position);

  return { ...pos, height: "39.5px", width: undefined };
};

export const getDownArrowSettings = (from: string, to: string) => {
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

  const pos = position.get(from as Position);
  const height = calculateHeight(from, to);

  return { ...pos, height: height, width: undefined };
};

const calculateHeight = (from: string, to: string) => {
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
    [3, "146.5px"],
  ]);
  return height.get(position.get(letterTo)! - position.get(letterFrom)!);
};

// Olis sindssyge algoritme:
// Til højre - Hvis: key1 === key2 && value1 - value2 = 1
// Ned højre - Hvis: key1 !== key2 && value1 - value2 = 1
// Ned - Hvis: key1 !== key2 && value1 - value2 = 0
const test = new Map([
  ["a", [1, 2, 3, 4]],
  ["b", [1, 2, 3, 4]],
  ["c", [1, 2, 3, 4]],
  ["d", [1, 2, 3, 4]],
  ["e", [1, 2, 3, 4]],
  ["f", [1, 2, 3, 4]],
  ["g", [1, 2, 3, 4]],
]);

export const getArrowSettings = (
  from: string,
  to: string,
  direction: string
): { top?: string; left?: string; height?: string; width?: string } => {
  if (from && to && direction) {
    if (direction === "right-down") {
      return getRightDownSettings(from, to);
    } else if (direction === "right-down-down") {
      return getRightDownDownSettings(from, to);
    } else if (direction === "right") {
      return getRightArrowSettings(from, to);
    } else if (direction === "down") {
      return getDownArrowSettings(from, to);
    }
  }

  return {};
};
