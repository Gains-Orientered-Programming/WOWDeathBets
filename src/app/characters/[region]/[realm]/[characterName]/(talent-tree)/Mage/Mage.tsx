import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Mage = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const arcane = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Arcane"
  );
  const fire = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Fire"
  );
  const frost = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Frost"
  );

  return (
    <>
      <div className="flex flex-row">
        <TalentTree specialization={arcane} data={data} name="Arcane" />
        <TalentTree specialization={fire} data={data} name="Fire" />
        <TalentTree specialization={frost} data={data} name="Frost" />
      </div>
    </>
  );
};
