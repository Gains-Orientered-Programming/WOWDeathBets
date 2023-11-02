import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Druid = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const balance = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Balance"
  );
  const feralCombat = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Feral Combat"
  );
  const restoration = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Restoration"
  );

  return (
    <>
      <div className="flex flex-row">
        <TalentTree specialization={balance} data={data} name="Balance" />
        <TalentTree
          specialization={feralCombat}
          data={data}
          name="Feral Combat"
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
