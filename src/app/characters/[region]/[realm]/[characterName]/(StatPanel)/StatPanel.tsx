import { CharacterStats } from "src/types/blizzard/characterStats";

export const StatPanel = ({
  characterStats,
}: {
  characterStats: CharacterStats;
}) => {
  return (
    <>
      <div className="bg-zinc-800 h-auto w-auto overflow-y-scroll">
        <ul className="flex flex-wrap gap-10 p-2">
          <ListElement title="Primary Stats">
            <span>Strength: {characterStats.strength.base}</span>
            <span>Agility: {characterStats.agility.base}</span>
            <span>Intellect: {characterStats.intellect.base}</span>
            <span>Stamina: {characterStats.stamina.base}</span>
          </ListElement>
          <ListElement title={"Melee"}>
            <span>Attack Power: {characterStats.attack_power}</span>
            <span>
              Crit Chance: {characterStats.melee_crit.value.toFixed(2)}%
            </span>
            <ListElement title="Hit">
              <span>Bonus: {characterStats.melee_crit.rating_bonus}%</span>
              <span>Miss</span>
            </ListElement>
            <ListElement title="Attack Speed">
              <span>Main Hand: {characterStats.main_hand_speed}</span>
              <span>Off Hand: {characterStats.off_hand_speed}</span>
            </ListElement>
          </ListElement>

          <ListElement title="Ranged">
            <span>Attack Power: </span>
            <span>Crit Chance: {characterStats.ranged_crit.value}%</span>
            <ListElement title="Hit">
              <span>Bonus: {characterStats.melee_crit.rating_bonus}%</span>
              <span>Miss</span>
            </ListElement>
            <ListElement title="Attack Speed">
              <span>Main Hand: {characterStats.main_hand_speed}</span>
              <span>Off Hand: {characterStats.off_hand_speed}</span>
            </ListElement>
          </ListElement>

          <ListElement title="Defense">
            <span>Armor: {characterStats.armor.base}</span>
            <span>Defense: {characterStats.defense.base}</span>
            <span>Block Chance: {characterStats.block.value.toFixed(2)}%</span>
            <span>Parry Chance: {characterStats.parry.value.toFixed(2)}%</span>
            <span>Dodge Chance: {characterStats.dodge.value.toFixed(2)}%</span>
          </ListElement>

          <ListElement title="Mana">
            <span>Mana Regen: {characterStats.mana_regen}</span>
            <span>Mana Regen Combat: {characterStats.mana_regen_combat}</span>
          </ListElement>

          <ListElement title="Spell">
            <span>Spell Power: {characterStats.spell_power}</span>
            <span>
              Crit Chance: {characterStats.spell_crit.value.toFixed(2)}%
            </span>
            <span>Penetration: {characterStats.spell_penetration}</span>
            <ListElement title="Hit">
              <span>Bonus: {characterStats.melee_crit.rating_bonus}%</span>
              <span>Miss</span>
            </ListElement>
            <ListElement title="Attack Speed">
              <span>Main Hand: {characterStats.main_hand_speed}</span>
              <span>Off Hand: {characterStats.off_hand_speed}</span>
            </ListElement>
          </ListElement>

          <ListElement title="Resistancee">
            <span>Fire Resistance: {characterStats.fire_resistance.base}</span>
            <span>
              Arcane Resistance: {characterStats.arcane_resistance.base}
            </span>
            <span>Holy Resistance: {characterStats.holy_resistance.base}</span>
            <span>
              Nature Resistance: {characterStats.nature_resistance.base}
            </span>
            <span>
              Shadow Resistance: {characterStats.shadow_resistance.base}
            </span>
          </ListElement>
        </ul>
      </div>
    </>
  );
};

const ListElement = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <li className="">
      <div>
        <h1 className="text-yellow-400">{title}</h1>
        <div className="pl-2 flex flex-col">{children}</div>
      </div>
    </li>
  );
};
