export interface CharacterProfileSummary {
  _links: Links;
  id: number;
  name: string;
  gender: Faction;
  faction: Faction;
  race: CharacterClass;
  character_class: CharacterClass;
  active_spec: ActiveSpec;
  realm: CharacterClass;
  guild: Guild;
  level: number;
  experience: number;
  titles: Appearance;
  pvp_summary: Appearance;
  media: Appearance;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  specializations: Appearance;
  statistics: Appearance;
  equipment: Appearance;
  appearance: Appearance;
  collections: Appearance;
  is_ghost: boolean;
}

export interface Links {
  self: Appearance;
}

export interface Appearance {
  href: string;
}

export interface ActiveSpec {
  key: Appearance;
  id: number;
}

export interface CharacterClass {
  key: Appearance;
  name: null;
  id: number;
  slug?: string;
}

export interface Faction {
  type: string;
  name: null;
}

export interface Guild {
  key: Appearance;
  name: string;
  id: number;
  realm: CharacterClass;
  faction: Faction;
}
