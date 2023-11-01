import { TalentData } from "../util/types";

export const data: TalentData = {
  "Beast Mastery": {
    name: "Beast Mastery",
    background: "/talents/tree-backgrounds/hunter/beast-mastery.jpg",
    icon: "/talents/icons/hunter/ability_hunter_beasttaming.jpg",
    talents: {
      "Improved Aspect of the Hawk": {
        id: 19552,
        name: "Improved Aspect of the Hawk",
        position: "a2",
        icon: "/talents/icons/hunter/spell_nature_ravenform.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      "Endurance Training": {
        id: 19583,
        name: "Endurance Training",
        position: "a3",
        icon: "/talents/icons/hunter/spell_nature_reincarnation.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      "Improved Eyes of the Beast": {
        id: 19557,
        name: "Improved Eyes of the Beast",
        position: "b1",
        icon: "/talents/icons/hunter/ability_eyeoftheowl.jpg",
        maxRank: 2,
        reqPoints: 5,
      },
      "Improved Aspect of the Monkey": {
        id: 19549,
        name: "Improved Aspect of the Monkey",
        position: "b2",
        icon: "/talents/icons/hunter/ability_hunter_aspectofthemonkey.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Thick Hide": {
        id: 19609,
        name: "Thick Hide",
        position: "b3",
        icon: "/talents/icons/hunter/inv_misc_pelt_bear_03.jpg",
        maxRank: 3,
        reqPoints: 5,
      },
      "Improved Revive Pet": {
        id: 24443,
        name: "Improved Revive Pet",
        position: "b4",
        icon: "/talents/icons/hunter/ability_hunter_beastsoothe.jpg",
        maxRank: 2,
        reqPoints: 5,
      },
      Pathfinding: {
        id: 19559,
        name: "Pathfinding",
        position: "c1",
        icon: "/talents/icons/hunter/ability_mount_jungletiger.jpg",
        maxRank: 2,
        reqPoints: 10,
      },
      "Bestial Swiftness": {
        id: 19596,
        name: "Bestial Swiftness",
        position: "c2",
        icon: "/talents/icons/hunter/ability_druid_dash.jpg",
        maxRank: 1,
        reqPoints: 10,
      },
      "Unleashed Fury": {
        id: 19616,
        name: "Unleashed Fury",
        position: "c3",
        icon: "/talents/icons/hunter/ability_bullrush.jpg",
        maxRank: 5,
        reqPoints: 10,
      },
      "Improved Mend Pet": {
        id: 19572,
        name: "Improved Mend Pet",
        position: "d2",
        icon: "/talents/icons/hunter/ability_hunter_mendpet.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      Ferocity: {
        id: 19598,
        name: "Ferocity",
        position: "d3",
        icon: "/talents/icons/hunter/inv_misc_monsterclaw_04.jpg",
        maxRank: 5,
        reqPoints: 15,
      },
      "Spirit Bond": {
        id: 19578,
        name: "Spirit Bond",
        position: "e1",
        icon: "/talents/icons/hunter/ability_druid_demoralizingroar.jpg",
        maxRank: 2,
        reqPoints: 20,
      },
      Intimidation: {
        id: 19577,
        name: "Intimidation",
        position: "e2",
        icon: "/talents/icons/hunter/ability_devour.jpg",
        maxRank: 1,
        reqPoints: 20,
      },
      "Bestial Discipline": {
        id: 19590,
        name: "Bestial Discipline",
        position: "e4",
        icon: "/talents/icons/hunter/spell_nature_abolishmagic.jpg",
        maxRank: 2,
        reqPoints: 20,
      },
      Frenzy: {
        id: 19621,
        name: "Frenzy",
        position: "f3",
        icon: "/talents/icons/hunter/inv_misc_monsterclaw_03.jpg",
        maxRank: 5,
        reqPoints: 25,
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
      },
      "Bestial Wrath": {
        id: 19574,
        name: "Bestial Wrath",
        position: "g2",
        icon: "/talents/icons/hunter/ability_druid_ferociousbite.jpg",
        maxRank: 1,
        reqPoints: 30,
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
      },
    },
  },
  Marksmanship: {
    name: "Marksmanship",
    background: "/talents/tree-backgrounds/hunter/marksmanship.jpg",
    icon: "/talents/icons/hunter/ability_marksmanship.jpg",
    talents: {
      "Improved Concussive Shot": {
        id: 19407,
        name: "Improved Concussive Shot",
        position: "a2",
        icon: "/talents/icons/hunter/spell_frost_stun.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      Efficiency: {
        id: 19416,
        name: "Efficiency",
        position: "a3",
        icon: "/talents/icons/hunter/spell_frost_wizardmark.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      "Improved Hunter's Mark": {
        id: 19421,
        name: "Improved Hunter's Mark",
        position: "b2",
        icon: "/talents/icons/hunter/ability_hunter_snipershot.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Lethal Shots": {
        id: 19426,
        name: "Lethal Shots",
        position: "b3",
        icon: "/talents/icons/hunter/ability_searingarrow.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Aimed Shot": {
        id: 19434,
        name: "Aimed Shot",
        position: "c1",
        icon: "/talents/icons/hunter/inv_spear_07.jpg",
        maxRank: 1,
        reqPoints: 10,
      },
      "Improved Arcane Shot": {
        id: 19454,
        name: "Improved Arcane Shot",
        position: "c2",
        icon: "/talents/icons/hunter/ability_impalingbolt.jpg",
        maxRank: 5,
        reqPoints: 10,
      },
      "Hawk Eye": {
        id: 19498,
        name: "Hawk Eye",
        position: "c4",
        icon: "/talents/icons/hunter/ability_townwatch.jpg",
        maxRank: 3,
        reqPoints: 10,
      },
      "Improved Serpent Sting": {
        id: 19464,
        name: "Improved Serpent Sting",
        position: "d2",
        icon: "/talents/icons/hunter/ability_hunter_quickshot.jpg",
        maxRank: 5,
        reqPoints: 15,
      },
      "Mortal Shots": {
        id: 19485,
        name: "Mortal Shots",
        position: "d3",
        icon: "/talents/icons/hunter/ability_piercedamage.jpg",
        maxRank: 5,
        reqPoints: 15,
        arrows: [{ dir: "down", from: "b3", to: "d3" }],
      },
      "Scatter Shot": {
        id: 19503,
        name: "Scatter Shot",
        position: "e1",
        icon: "/talents/icons/hunter/ability_golemstormbolt.jpg",
        maxRank: 1,
        reqPoints: 20,
      },
      Barrage: {
        id: 19461,
        name: "Barrage",
        position: "e2",
        icon: "/talents/icons/hunter/ability_upgrademoonglaive.jpg",
        maxRank: 3,
        reqPoints: 20,
      },
      "Improved Scorpid Sting": {
        id: 19491,
        name: "Improved Scorpid Sting",
        position: "e3",
        icon: "/talents/icons/hunter/ability_hunter_criticalshot.jpg",
        maxRank: 3,
        reqPoints: 20,
      },
      "Ranged Weapon Specialization": {
        id: 19507,
        name: "Ranged Weapon Specialization",
        position: "f3",
        icon: "/talents/icons/hunter/inv_weapon_rifle_06.jpg",
        maxRank: 5,
        reqPoints: 25,
      },
      "Trueshot Aura": {
        id: 19506,
        name: "Trueshot Aura",
        position: "g2",
        icon: "/talents/icons/hunter/ability_trueshot.jpg",
        maxRank: 1,
        reqPoints: 30,
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
      },
    },
  },
  Survival: {
    name: "Survival",
    background: "/talents/tree-backgrounds/hunter/survival.jpg",
    icon: "/talents/icons/hunter/ability_hunter_swiftstrike.jpg",
    talents: {
      "Monster Slaying": {
        id: 24293,
        name: "Monster Slaying",
        position: "a1",
        icon: "/talents/icons/hunter/inv_misc_head_dragon_01.jpg",
        maxRank: 3,
        reqPoints: 0,
      },
      "Humanoid Slaying": {
        id: 19151,
        name: "Humanoid Slaying",
        position: "a2",
        icon: "/talents/icons/hunter/spell_holy_prayerofhealing.jpg",
        maxRank: 3,
        reqPoints: 0,
      },
      Deflection: {
        id: 19295,
        name: "Deflection",
        position: "a3",
        icon: "/talents/icons/hunter/ability_parry.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      Entrapment: {
        id: 19184,
        name: "Entrapment",
        position: "b1",
        icon: "/talents/icons/hunter/spell_nature_stranglevines.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Savage Strikes": {
        id: 19159,
        name: "Savage Strikes",
        position: "b2",
        icon: "/talents/icons/hunter/ability_racial_bloodrage.jpg",
        maxRank: 2,
        reqPoints: 5,
      },
      "Improved Wing Clip": {
        id: 19228,
        name: "Improved Wing Clip",
        position: "b3",
        icon: "/talents/icons/hunter/ability_rogue_trip.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Clever Traps": {
        id: 19239,
        name: "Clever Traps",
        position: "c1",
        icon: "/talents/icons/hunter/spell_nature_timestop.jpg",
        maxRank: 2,
        reqPoints: 10,
      },
      Survivalist: {
        id: 19255,
        name: "Survivalist",
        position: "c2",
        icon: "/talents/icons/hunter/spell_shadow_twilight.jpg",
        maxRank: 5,
        reqPoints: 10,
      },
      Deterrence: {
        id: 19263,
        name: "Deterrence",
        position: "c3",
        icon: "/talents/icons/hunter/ability_whirlwind.jpg",
        maxRank: 1,
        reqPoints: 10,
      },
      "Trap Mastery": {
        id: 19375,
        name: "Trap Mastery",
        position: "d1",
        icon: "/talents/icons/hunter/ability_ensnare.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      Surefooted: {
        id: 19290,
        name: "Surefooted",
        position: "d2",
        icon: "/talents/icons/hunter/ability_kick.jpg",
        maxRank: 3,
        reqPoints: 15,
      },
      "Improved Feign Death": {
        id: 19286,
        name: "Improved Feign Death",
        position: "d4",
        icon: "/talents/icons/hunter/ability_rogue_feigndeath.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      "Killer Instinct": {
        id: 19370,
        name: "Killer Instinct",
        position: "e2",
        icon: "/talents/icons/hunter/spell_holy_blessingofstamina.jpg",
        maxRank: 3,
        reqPoints: 20,
      },
      Counterattack: {
        id: 19306,
        name: "Counterattack",
        position: "e3",
        icon: "/talents/icons/hunter/ability_warrior_challange.jpg",
        maxRank: 1,
        reqPoints: 20,
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
      },
      "Lightening Reflexes": {
        id: 19168,
        name: "Lightening Reflexes",
        position: "f3",
        icon: "/talents/icons/hunter/spell_nature_invisibilty.jpg",
        maxRank: 5,
        reqPoints: 25,
      },
      "Wyvern Sting": {
        id: 19386,
        name: "Wyvern Sting",
        position: "g2",
        icon: "/talents/icons/hunter/inv_spear_02.jpg",
        maxRank: 1,
        reqPoints: 30,
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
      },
    },
  },
};