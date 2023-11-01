import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Paladin = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const holy = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Holy"
  );
  const protection = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Protection"
  );
  const retribution = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Retribution"
  );

  return (
    <>
      <div className="flex flex-row">
        <TalentTree specialization={holy} data={data} name="Holy" />
        <TalentTree specialization={protection} data={data} name="Protection" />
        <TalentTree
          specialization={retribution}
          data={data}
          name="Retribution"
        />
      </div>
    </>
  );
};
