export interface CharacterSpecializations {
  _links: Links;
  character: Character;
  specialization_groups: SpecializationGroup[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Character {
  key: Self;
  name: string;
  id: number;
  realm?: Character;
  slug?: string;
}

export interface SpecializationGroup {
  is_active: boolean;
  specializations: Specialization[];
}

export interface Specialization {
  talents: TalentElement[];
  specialization_name: string;
  spent_points: number;
}

export interface TalentElement {
  talent: TalentTalent;
  spell_tooltip: SpellTooltip;
  talent_rank: number;
}

export interface SpellTooltip {
  spell: Spell;
  description: string;
  cast_time: CastTime;
  power_cost: null | string;
  cooldown?: string;
  range?: string;
}

export enum CastTime {
  Instant = "Instant",
  Passive = "Passive",
}

export interface Spell {
  name: string;
  id: number;
}

export interface TalentTalent {
  id: number;
}
