import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import Warrior from "./Warrior";
import Warlock from "./Warlock";
import Mage from "./Mage";
import Shaman from "./Shaman";
import Hunter from "./Hunter";
import Paladin from "./Paladin";
import Druid from "./Druid";

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
    case "Hunter":
      return <Hunter specializationGroup={specializationGroup} />;
    case "Paladin":
      return <Paladin specializationGroup={specializationGroup} />;
    case "Druid":
      return <Druid specializationGroup={specializationGroup} />;
    default:
      return <></>;
  }
};
