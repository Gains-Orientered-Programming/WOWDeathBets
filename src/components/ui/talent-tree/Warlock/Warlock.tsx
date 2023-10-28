import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Warlock = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const affliction = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Affliction"
  );
  const demonology = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Demonology"
  );
  const destruction = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Destruction"
  );

  return (
    <>
      <div className="flex flex-row">
        <TalentTree specialization={affliction} data={data} name="Affliction" />
        <TalentTree specialization={demonology} data={data} name="Demonology" />
        <TalentTree
          specialization={destruction}
          data={data}
          name="Destruction"
        />
      </div>
    </>
  );
};
