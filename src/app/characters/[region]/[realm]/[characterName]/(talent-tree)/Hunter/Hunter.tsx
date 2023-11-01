import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Hunter = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const beastMastery = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Beast Mastery"
  );
  const marksmanship = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Marksmanship"
  );
  const survival = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Survival"
  );

  return (
    <>
      <div className="flex flex-row">
        <TalentTree
          specialization={beastMastery}
          data={data}
          name="Beast Mastery"
        />
        <TalentTree
          specialization={marksmanship}
          data={data}
          name="Marksmanship"
        />
        <TalentTree specialization={survival} data={data} name="Survival" />
      </div>
    </>
  );
};
