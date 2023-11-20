// payoutCalculator.ts
interface LevelInterval {
  start: number;
  end: number;
}

export default function calculatePayout(
  oddsInterval: LevelInterval
): number | null {
  // Validate character level
  if (
    oddsInterval.start < 1 ||
    oddsInterval.start > 60 ||
    oddsInterval.end < 1 ||
    oddsInterval.end > 60 ||
    oddsInterval.start > oddsInterval.end
  ) {
    console.log("Invalid character level");
    return null;
  }

  // Adjust payout based on the chosen odds interval
  const oddsIntervalSize: number = oddsInterval.end - oddsInterval.start + 1;
  const maxPayoutMultiplier: number = 1.5; // You can adjust the maximum payout multiplier as needed

  let payoutMultiplier: number;

  if (oddsInterval.start === 1 && oddsInterval.end === 60) {
    payoutMultiplier = 0;
  } else {
    payoutMultiplier = maxPayoutMultiplier - oddsIntervalSize / 35; // Adjust multiplier based on the chosen odds interval
  }

  const adjustedPayout: number = 1 + payoutMultiplier;

  return adjustedPayout;
}

// Example usage:
// import calculatePayout from './payoutCalculator';
// const oddsInterval: LevelInterval = { start: 1, end: 60 };
// const adjustedPayout: number | null = calculatePayout(oddsInterval);
// ...
