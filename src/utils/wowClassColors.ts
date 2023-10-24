export const wowClassColors = (wowClass: string) => {
  const colors = {
    "Druid": "#FF7C0A",
    "Hunter": "#AAD372",
    "Mage": "#3FC7EB",
    "Paladin": "#F48CBA",
    "Priest": "#FFFFFF",
    "Rogue": "#FFF468",
    "Shaman": "#0070DD",
    "Warlock": "#8788EE",
    "Warrior": "#C69B6D",
  };

  return colors[wowClass as keyof typeof colors];
};
