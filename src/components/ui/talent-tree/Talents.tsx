import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import Warrior from "./Warrior";
import Warlock from "./Warlock";

export const Talents = ({
  wowClass,
  specializationGroup,
}: {
  wowClass: string;
  specializationGroup: SpecializationGroup;
}) => {
  switch (wowClass) {
    case "Warrior":
      return <Warrior specializationGroup={specializationGroup} />;
    case "Warlock":
      return <Warlock specializationGroup={specializationGroup} />;
    default:
      return <></>;
  }
};
