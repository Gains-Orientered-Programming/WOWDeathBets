import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import Warrior from "./Warrior";
import Warlock from "./Warlock";
import Mage from "./Mage";
import Shaman from "./Shaman";

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
    case "Mage":
      return <Mage specializationGroup={specializationGroup} />;
    case "Shaman":
      return <Shaman specializationGroup={specializationGroup} />;
    default:
      return <></>;
  }
};
