import { TalentData } from "../util/types";

export const data: TalentData = {
  Affliction: {
    name: "Affliction",
    background: "/talents/tree-backgrounds/warlock/affliction.jpg",
    icon: "/talents/icons/warlock/spell_shadow_deathcoil.jpg",
    talents: {
      Suppression: {
        name: "Suppression",
        position: "a2",
        icon: "/talents/icons/warlock/spell_shadow_unsummonbuilding.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      "Improved Corruption": {
        name: "Improved Corruption",
        position: "a3",
        icon: "/talents/icons/warlock/spell_shadow_abominationexplosion.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      "Improved Curse of Weakness": {
        name: "Improved Curse of Weakness",
        position: "b1",
        icon: "/talents/icons/warlock/spell_shadow_curseofmannoroth.jpg",
        maxRank: 3,
        reqPoints: 5,
      },
      "Improved Drain Soul": {
        name: "Improved Drain Soul",
        position: "b2",
        icon: "/talents/icons/warlock/spell_shadow_haunting.jpg",
        maxRank: 2,
        reqPoints: 5,
      },
      "Improved Life Tap": {
        name: "Improved Life Tap",
        position: "b3",
        icon: "/talents/icons/warlock/spell_shadow_burningspirit.jpg",
        maxRank: 2,
        reqPoints: 5,
      },
      "Improved Drain Life": {
        name: "Improved Drain Life",
        position: "b4",
        icon: "/talents/icons/warlock/spell_shadow_lifedrain02.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Improved Curse of Agony": {
        name: "Improved Curse of Agony",
        position: "c1",
        icon: "/talents/icons/warlock/spell_shadow_curseofsargeras.jpg",
        maxRank: 3,
        reqPoints: 10,
      },
      "Fel Concentration": {
        name: "Fel Concentration",
        position: "c2",
        icon: "/talents/icons/warlock/spell_shadow_fingerofdeath.jpg",
        maxRank: 5,
        reqPoints: 10,
      },
      "Amplify Curse": {
        name: "Amplify Curse",
        position: "c3",
        icon: "/talents/icons/warlock/spell_shadow_contagion.jpg",
        maxRank: 1,
        reqPoints: 10,
      },
      "Grim Reach": {
        name: "Grim Reach",
        position: "d1",
        icon: "/talents/icons/warlock/spell_shadow_callofbone.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      Nightfall: {
        name: "Nightfall",
        position: "d2",
        icon: "/talents/icons/warlock/spell_shadow_twilight.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      "Improved Drain Mana": {
        name: "Improved Drain Mana",
        position: "d4",
        icon: "/talents/icons/warlock/spell_shadow_siphonmana.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      "Siphon Life": {
        name: "Siphon Life",
        position: "e2",
        icon: "/talents/icons/warlock/spell_shadow_requiem.jpg",
        maxRank: 1,
        reqPoints: 20,
      },
      "Curse of Exhaustion": {
        name: "Curse of Exhaustion",
        position: "e3",
        icon: "/talents/icons/warlock/spell_shadow_grimward.jpg",
        maxRank: 1,
        reqPoints: 20,
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
      },
      "Improved Curse of Exhaustion": {
        name: "Improved Curse of Exhaustion",
        position: "e4",
        icon: "/talents/icons/warlock/spell_shadow_grimward.jpg",
        maxRank: 4,
        reqPoints: 20,
        arrows: [{ dir: "right", from: "e3", to: "e4" }],
      },
      "Shadow Mastery": {
        name: "Shadow Mastery",
        position: "f2",
        icon: "/talents/icons/warlock/spell_shadow_shadetruesight.jpg",
        maxRank: 5,
        reqPoints: 25,
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
      },
      "Dark Pact": {
        name: "Dark Pact",
        position: "g2",
        icon: "/talents/icons/warlock/spell_shadow_darkritual.jpg",
        maxRank: 1,
        reqPoints: 30,
      },
    },
  },
  Demonology: {
    name: "Demonology",
    background: "/talents/tree-backgrounds/warlock/demonology.jpg",
    icon: "/talents/icons/warlock/spell_shadow_metamorphosis.jpg",
    talents: {
      "Improved Healthstone": {
        name: "Improved Healthstone",
        position: "a1",
        icon: "/talents/icons/warlock/inv_stone_04.jpg",
        maxRank: 2,
        reqPoints: 0,
      },
      "Improved Imp": {
        name: "Improved Imp",
        position: "a2",
        icon: "/talents/icons/warlock/spell_shadow_summonimp.jpg",
        maxRank: 3,
        reqPoints: 0,
      },
      "Demonic Embrace": {
        name: "Demonic Embrace",
        position: "a3",
        icon: "/talents/icons/warlock/spell_shadow_metamorphosis.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      "Improved Health Funnel": {
        name: "Improved Health Funnel",
        position: "b1",
        icon: "/talents/icons/warlock/spell_shadow_lifedrain.jpg",
        maxRank: 2,
        reqPoints: 5,
      },
      "Improved Voidwalker": {
        name: "Improved Voidwalker",
        position: "b2",
        icon: "/talents/icons/warlock/spell_shadow_summonvoidwalker.jpg",
        maxRank: 3,
        reqPoints: 5,
      },
      "Fel Intellect": {
        name: "Fel Intellect",
        position: "b3",
        icon: "/talents/icons/warlock/spell_holy_magicalsentry.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Improved Succubus": {
        name: "Improved Succubus",
        position: "c1",
        icon: "/talents/icons/warlock/spell_shadow_summonsuccubus.jpg",
        maxRank: 3,
        reqPoints: 10,
      },
      "Fel Domination": {
        name: "Fel Domination",
        position: "c2",
        icon: "/talents/icons/warlock/spell_nature_removecurse.jpg",
        maxRank: 1,
        reqPoints: 10,
      },
      "Fel Stamina": {
        name: "Fel Stamina",
        position: "c3",
        icon: "/talents/icons/warlock/spell_shadow_antishadow.jpg",
        maxRank: 5,
        reqPoints: 10,
      },
      "Master Summoner": {
        name: "Master Summoner",
        position: "d2",
        icon: "/talents/icons/warlock/spell_shadow_impphaseshift.jpg",
        maxRank: 2,
        reqPoints: 15,
        arrows: [{ dir: "down", from: "c2", to: "d2" }],
      },
      "Unholy Power": {
        name: "Unholy Power",
        position: "d3",
        icon: "/talents/icons/warlock/spell_shadow_shadowworddominate.jpg",
        maxRank: 5,
        reqPoints: 15,
      },
      "Improved Enslave Demon": {
        name: "Improved Enslave Demon",
        position: "e1",
        icon: "/talents/icons/warlock/spell_shadow_enslavedemon.jpg",
        maxRank: 5,
        reqPoints: 20,
      },
      "Demonic Sacrifice": {
        name: "Demonic Sacrifice",
        position: "e2",
        icon: "/talents/icons/warlock/spell_shadow_psychicscream.jpg",
        maxRank: 1,
        reqPoints: 20,
      },
      "Improved Firestone": {
        name: "Improved Firestone",
        position: "e4",
        icon: "/talents/icons/warlock/inv_ammo_firetar.jpg",
        maxRank: 2,
        reqPoints: 20,
      },
      "Master Demonologist": {
        name: "Master Demonologist",
        position: "f3",
        icon: "/talents/icons/warlock/spell_shadow_shadowpact.jpg",
        maxRank: 5,
        reqPoints: 25,
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
      },
      "Soul Link": {
        name: "Soul Link",
        position: "g2",
        icon: "/talents/icons/warlock/spell_shadow_gathershadows.jpg",
        maxRank: 1,
        reqPoints: 30,
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
      },
      "Improved Spellstone": {
        name: "Improved Spellstone",
        position: "g3",
        icon: "/talents/icons/warlock/inv_misc_gem_sapphire_01.jpg",
        maxRank: 2,
        reqPoints: 30,
      },
    },
  },
  Destruction: {
    name: "Destruction",
    background: "/talents/tree-backgrounds/warlock/destruction.jpg",
    icon: "/talents/icons/warlock/spell_shadow_rainoffire.jpg",
    talents: {
      "Improved Shadow Bolt": {
        name: "Improved Shadow Bolt",
        position: "a2",
        icon: "/talents/icons/warlock/spell_shadow_shadowbolt.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      Cataclysm: {
        name: "Cataclysm",
        position: "a3",
        icon: "/talents/icons/warlock/spell_fire_windsofwoe.jpg",
        maxRank: 5,
        reqPoints: 0,
      },
      Bane: {
        name: "Bane",
        position: "b2",
        icon: "/talents/icons/warlock/spell_shadow_deathpact.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      Aftermath: {
        name: "Aftermath",
        position: "b3",
        icon: "/talents/icons/warlock/spell_fire_fire.jpg",
        maxRank: 5,
        reqPoints: 5,
      },
      "Improved Firebolt": {
        name: "Improved Firebolt",
        position: "c1",
        icon: "/talents/icons/warlock/spell_fire_firebolt.jpg",
        maxRank: 2,
        reqPoints: 10,
      },
      "Improved Lash of Pain": {
        name: "Improved Lash of Pain",
        position: "c2",
        icon: "/talents/icons/warlock/spell_shadow_curse.jpg",
        maxRank: 2,
        reqPoints: 10,
      },
      Devastation: {
        name: "Devastation",
        position: "c3",
        icon: "/talents/icons/warlock/spell_fire_flameshock.jpg",
        maxRank: 5,
        reqPoints: 10,
      },
      Shadowburn: {
        name: "Shadowburn",
        position: "c4",
        icon: "/talents/icons/warlock/spell_shadow_scourgebuild.jpg",
        maxRank: 1,
        reqPoints: 10,
      },
      Intensity: {
        name: "Intensity",
        position: "d1",
        icon: "/talents/icons/warlock/spell_fire_lavaspawn.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      "Destructive Reach": {
        name: "Destructive Reach",
        position: "d2",
        icon: "/talents/icons/warlock/spell_shadow_corpseexplode.jpg",
        maxRank: 2,
        reqPoints: 15,
      },
      "Improved Searing Pain": {
        name: "Improved Searing Pain",
        position: "d4",
        icon: "/talents/icons/warlock/spell_fire_soulburn.jpg",
        maxRank: 5,
        reqPoints: 15,
      },
      Pyroclasm: {
        name: "Pyroclasm",
        position: "e1",
        icon: "/talents/icons/warlock/spell_fire_volcano.jpg",
        maxRank: 2,
        reqPoints: 20,
        arrows: [{ dir: "down", from: "d1", to: "e1" }],
      },
      "Improved Immolate": {
        name: "Improved Immolate",
        position: "e2",
        icon: "/talents/icons/warlock/spell_fire_immolation.jpg",
        maxRank: 5,
        reqPoints: 20,
      },
      Ruin: {
        name: "Ruin",
        position: "e3",
        icon: "/talents/icons/warlock/spell_shadow_shadowwordpain.jpg",
        maxRank: 1,
        reqPoints: 20,
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
      },
      Emberstorm: {
        name: "Emberstorm",
        position: "f3",
        icon: "/talents/icons/warlock/spell_fire_selfdestruct.jpg",
        maxRank: 5,
        reqPoints: 25,
      },
      Conflagrate: {
        name: "Conflagrate",
        position: "g2",
        icon: "/talents/icons/warlock/spell_fire_fireball.jpg",
        maxRank: 1,
        reqPoints: 30,
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
      },
    },
  },
};
