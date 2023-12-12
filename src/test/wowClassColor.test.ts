import { wowClassColors } from "../utils/wowClassColors"; // Replace this path with the correct path

describe("wowClassColors", () => {
  it("should return correct color for valid WoW class", () => {
    expect(wowClassColors("Druid")).toBe("#FF7C0A");
    expect(wowClassColors("Hunter")).toBe("#AAD372");
    expect(wowClassColors("Mage")).toBe("#3FC7EB");
    expect(wowClassColors("Paladin")).toBe("#F48CBA");
    expect(wowClassColors("Priest")).toBe("#FFFFFF");
    expect(wowClassColors("Rogue")).toBe("#FFF468");
    expect(wowClassColors("Shaman")).toBe("#0070DD");
    expect(wowClassColors("Warlock")).toBe("#8788EE");
    expect(wowClassColors("Warrior")).toBe("#C69B6D");
  });

  it("should return undefined for invalid WoW class", () => {
    expect(wowClassColors("InvalidClass")).toBeUndefined();
  });
});
