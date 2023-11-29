export function calculatePayout(characterLevel: number): number {
  const maxLevel = 60;
  const minPayout = 1; // Minimum payout multiplier
  const maxPayout = 2.5; // Maximum payout multiplier

  // Ensure the character level is within the valid range
  if (characterLevel < 1 || characterLevel > maxLevel) {
    throw new Error("Character level should be between 1 and 60");
  }

  // Calculate the payout multiplier based on the character's level (inverse relationship)
  const payoutMultiplier = characterLevel / maxLevel; // Inverse relationship

  // Calculate the actual payout based on the multiplier and the range of payout
  const payout = minPayout + payoutMultiplier * (maxPayout - minPayout);

  return payout;
}
