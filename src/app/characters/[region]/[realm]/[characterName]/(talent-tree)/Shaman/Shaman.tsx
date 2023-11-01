import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Shaman = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const elemental = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Elemental"
  );
  const enhancement = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Enhancement"
  );
  const restoration = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Restoration"
  );

  return (
    <>
      <div className="flex flex-row">
        <TalentTree specialization={elemental} data={data} name="Elemental" />
        <TalentTree
          specialization={enhancement}
          data={data}
          name="Enhancement"
        />
        <TalentTree
          specialization={restoration}
          data={data}
          name="Restoration"
        />
      </div>
    </>
  );
};
