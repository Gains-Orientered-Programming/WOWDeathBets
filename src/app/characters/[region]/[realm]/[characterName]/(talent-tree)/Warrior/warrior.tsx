import { data } from "./data";
import { SpecializationGroup } from "src/types/blizzard/characterSpecializations.t";
import TalentTree from "../util/TalentTree";

export const Warrior = ({
  specializationGroup,
}: {
  specializationGroup: SpecializationGroup;
}) => {
  const arms = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Arms"
  );
  const fury = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Fury"
  );
  const protection = specializationGroup.specializations.find(
    (spec) => spec.specialization_name === "Protection"
  );

  return (
    <>
      <div className="flex flex-row">
        <TalentTree specialization={arms} data={data} name="Arms" />
        <TalentTree specialization={fury} data={data} name="Fury" />
        <TalentTree specialization={protection} data={data} name="Protection" />
      </div>
    </>
  );
};
