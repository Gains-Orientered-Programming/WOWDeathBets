export interface CharacterStats {
  _links: Links;
  health: number;
  power: number;
  power_type: Character;
  strength: Agility;
  agility: Agility;
  intellect: Agility;
  stamina: Agility;
  melee_crit: Block;
  attack_power: number;
  main_hand_damage_min: number;
  main_hand_damage_max: number;
  main_hand_speed: number;
  main_hand_dps: number;
  off_hand_damage_min: number;
  off_hand_damage_max: number;
  off_hand_speed: number;
  off_hand_dps: number;
  spell_power: number;
  spell_penetration: number;
  spell_crit: Block;
  mana_regen: number;
  mana_regen_combat: number;
  armor: Agility;
  dodge: Block;
  parry: Block;
  block: Block;
  ranged_crit: Block;
  character: Character;
  spirit: Agility;
  defense: Agility;
  fire_resistance: Agility;
  holy_resistance: Agility;
  shadow_resistance: Agility;
  nature_resistance: Agility;
  arcane_resistance: Agility;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Agility {
  base: number;
  effective: number;
}

export interface Block {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Character {
  key: Self;
  name: string;
  id: number;
  realm?: Character;
  slug?: string;
}
