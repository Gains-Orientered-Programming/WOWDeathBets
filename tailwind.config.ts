import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "Druid": "#FF7C0A",
        "Hunter": "#AAD372",
        "Mage": "#3FC7EB",
        "Paladin": "#F48CBA",
        "Priest": "#FFFFFF",
        "Rogue": "#FFF468",
        "Shaman": "#0070DD",
        "Warlock": "#8788EE",
        "Warrior": "#C69B6D",
      },
    },
  },
  plugins: [],
};
export default config;
