import axios from "axios";
import { Betting } from "src/types/betting-service.t";

export const seedBettings = async (): Promise<Betting[]> => {
  try {
    const bettings: Betting[] = [
      {
        userId: "seed_user",
        characterName: "test_characterName",
        region: "test_region",
        realm: "test_realm",
        amount: 0,
      },
      {
        userId: "seed_user",
        characterName: "test_characterName2",
        region: "test_region",
        realm: "test_realm",
        amount: 0,
      },
    ];

    const seededBettings: Betting[] = [];

    for (const bettingData of bettings) {
      const response = await axios.post(
        "https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings",
        bettingData
      );

      if (response.status === 201) {
        console.log("Betting data seeded successfully:", bettingData);
        seededBettings.push(response.data as Betting); // Add seeded betting to the array
      } else {
        console.error("Failed to seed betting data:", response.statusText);
      }
    }

    return seededBettings;
  } catch (error) {
    console.error("Error seeding betting data:", error);
    return []; // Return an empty array in case of errors
  }
};

export const deleteSeededBettings = async (
  seededBettings: Betting[]
): Promise<void> => {
  try {
    for (const betting of seededBettings) {
      const response = await axios.delete(
        `https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings/${betting._id}`
      );

      if (response.status === 200) {
        console.log(
          `Seeded betting data with ID ${betting._id} deleted successfully.`
        );
      } else {
        console.error(
          `Failed to delete seeded betting data with ID ${betting._id}:`,
          response.statusText
        );
      }
    }
    console.log("All seeded bettings deleted successfully.");
  } catch (error) {
    console.error("Error deleting seeded bettings:", error);
  }
};
