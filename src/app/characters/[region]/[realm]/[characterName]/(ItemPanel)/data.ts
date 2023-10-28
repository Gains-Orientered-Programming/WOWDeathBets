import { ItemPanelType } from "./types";

export const charaterPanel: ItemPanelType = {
  left: [
    {
      name: "HEAD",
      slot: 1,
      empty_image: "/slots/empty-slot-head.webp",
    },
    {
      name: "NECK",
      slot: 2,
      empty_image: "/slots/empty-slot-neck.webp",
    },
    {
      name: "SHOULDER",
      slot: 3,
      empty_image: "/slots/empty-slot-shoulder.webp",
    },
    {
      name: "BACK",
      slot: 15,
      empty_image: "/slots/empty-slot-back.webp",
    },
    {
      name: "CHEST",
      slot: 5,
      empty_image: "/slots/empty-slot-chest.webp",
    },
    {
      name: "SHIRT",
      slot: 4,
      empty_image: "/slots/empty-slot-shirt.webp",
    },
    {
      name: "TABARD",
      slot: 10,
      empty_image: "/slots/empty-slot-tabard.webp",
    },
    {
      name: "WRIST",
      slot: 9,
      empty_image: "/slots/empty-slot-wrist.webp",
    },
  ],
  right: [
    {
      name: "HANDS",
      slot: 10,
      empty_image: "/slots/empty-slot-hands.webp",
    },
    {
      name: "WAIST",
      slot: 6,
      empty_image: "/slots/empty-slot-waist.webp",
    },
    {
      name: "LEGS",
      slot: 7,
      empty_image: "/slots/empty-slot-legs.webp",
    },
    {
      name: "FEET",
      slot: 8,
      empty_image: "/slots/empty-slot-feet.webp",
    },
    {
      name: "FINGER_1",
      slot: 11,
      empty_image: "/slots/empty-slot-finger.webp",
    },
    {
      name: "FINGER_2",
      slot: 12,
      empty_image: "/slots/empty-slot-finger.webp",
    },
    {
      name: "TRINKET_1",
      slot: 13,
      empty_image: "/slots/empty-slot-trinket.webp",
    },
    {
      name: "TRINKET_2",
      slot: 14,
      empty_image: "/slots/empty-slot-trinket.webp",
    },
  ],
  weapons: [
    {
      name: "MAIN_HAND",
      slot: 16,
      empty_image: "/slots/empty-slot-mainhand.webp",
    },
    {
      name: "OFF_HAND",
      slot: 17,
      empty_image: "/slots/empty-slot-secondaryhand.webp",
    },
    {
      name: "RANGED",
      slot: 18,
      empty_image: "/slots/empty-slot-ranged.webp",
    },
  ],
};

export const colorQuality = new Map([
  ["POOR", "#ff9d9d9d"],
  ["COMMON", "#ffffff"],
  ["UNCOMMON", "#1eff00"],
  ["RARE", "#0070dd"],
  ["EPIC", "#a335ee"],
  ["LEGENDARY", "#ff8000"],
]);
