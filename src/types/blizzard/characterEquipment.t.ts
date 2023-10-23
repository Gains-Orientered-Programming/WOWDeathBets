export interface CharacterEquipment {
  _links: Links;
  character: Character;
  equipped_items: EquippedItem[];
  equipped_item_sets: Set[];
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

export interface Set {
  item_set?: Character;
  items?: ItemElement[];
  effects?: Effect[];
  display_string?: string;
}

export interface Effect {
  display_string: string;
  required_count: number;
}

export interface ItemElement {
  item: Character;
  is_equipped?: boolean;
}

export interface EquippedItem {
  item: MediaClass;
  enchantments?: Enchantment[];
  slot: Binding;
  quantity: number;
  quality: Binding;
  name: string;
  media: MediaClass;
  item_class: Character;
  item_subclass: Character;
  inventory_type: Binding;
  binding: Binding;
  sell_price: SellPrice;
  requirements?: Requirements;
  is_subclass_hidden?: boolean;
  armor?: Armor;
  stats?: Stat[];
  durability?: Durability;
  set?: Set;
  weapon?: Weapon;
}

export interface Armor {
  value: number;
  display: Display;
}

export interface Display {
  display_string: string;
  color: Color;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Binding {
  type: string;
  name: string;
}

export interface Durability {
  value: number;
  display_string: string;
}

export interface Enchantment {
  display_string: string;
  enchantment_id: number;
  enchantment_slot: EnchantmentSlot;
}

export interface EnchantmentSlot {
  id: number;
}

export interface MediaClass {
  key: Self;
  id: number;
}

export interface Requirements {
  level: Durability;
}

export interface SellPrice {
  value: number;
  display_strings: DisplayStrings;
}

export interface DisplayStrings {
  header: Header;
  gold: string;
  silver: string;
  copper: string;
}

export enum Header {
  SellPrice = "Sell Price:",
}

export interface Stat {
  type: Binding;
  value: number;
  display: Display;
}

export interface Weapon {
  damage: Damage;
  attack_speed: Durability;
  dps: Durability;
}

export interface Damage {
  min_value: number;
  max_value: number;
  display_string: string;
  damage_class: Binding;
}
