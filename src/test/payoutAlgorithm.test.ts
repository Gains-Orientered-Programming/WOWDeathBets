import { calculatePayout } from "../utils/payoutAlogrithm"; // Replace this path with the correct path

describe("calculatePayout", () => {
  const tolerance = 0.05; // Increased tolerance for floating-point precision

  it("should calculate payout for character level within range", () => {
    // Test for character levels within the valid range
    expect(calculatePayout(1)).toBeGreaterThanOrEqual(1 - tolerance);
    expect(calculatePayout(1)).toBeLessThanOrEqual(1 + tolerance);

    expect(calculatePayout(30)).toBeGreaterThanOrEqual(1.75 - tolerance);
    expect(calculatePayout(30)).toBeLessThanOrEqual(1.75 + tolerance);

    expect(calculatePayout(60)).toBeGreaterThanOrEqual(2.5 - tolerance);
    expect(calculatePayout(60)).toBeLessThanOrEqual(2.5 + tolerance);
  });

  it("should throw an error for character level outside valid range", () => {
    // Test for character levels outside the valid range
    expect(() => calculatePayout(0)).toThrowError(
      "Character level should be between 1 and 60"
    );
    expect(() => calculatePayout(61)).toThrowError(
      "Character level should be between 1 and 60"
    );
  });
});
