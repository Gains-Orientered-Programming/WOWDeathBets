import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Rogue = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const assassination = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Assassination"
  );
  const combat = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Combat"
  );
  const subtlety = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Subtlety"
  );

  return (
    <div className="flex flex-row">
      <TalentTree
        specialization={assassination}
        data={data}
        name="Assassination"
      />
      <TalentTree specialization={combat} data={data} name="Combat" />
      <TalentTree specialization={subtlety} data={data} name="Subtlety" />
    </div>
  );
};
