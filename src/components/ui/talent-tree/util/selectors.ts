import { TalentData } from "./types";

export const getTreeData = (data: TalentData, tree: string) => {
  return data[tree];
};

export const getTalentData = (
  data: TalentData,
  tree: string,
  talent: string
) => {
  return data[tree].talents[talent];
};
