import { seedBettings, deleteSeededBettings } from "../../utils/seedBettings";
import {
  createBetting,
  getBettingsByUserId,
  getAllBettings,
  getHighestBettings,
} from "../../../api/betting-services";
import { Betting } from "src/types/betting-service.t";

describe("Betting Service Integration Tests", () => {
  let seededBettings: Betting[] = [];

  beforeAll(async () => {
    seededBettings = await seedBettings();
  });

  it("should create a betting", async () => {
    const bettingData = {
      userId: "123",
      characterName: "Petrice",
      region: "eu",
      realm: "nekrosh",
      amount: 1000,
    };

    const response = await createBetting(bettingData);
    expect(response.status).toBe(201);
    expect(response.data.characterName).toEqual(bettingData.characterName);
    expect(response.data.amount).toEqual(bettingData.amount);
    expect(response.data.realm).toEqual(bettingData.realm);
    expect(response.data.region).toEqual(bettingData.region);
    expect(response.data.userId).toEqual(bettingData.userId);
  });

  it("should get bettings by user ID", async () => {
    const bettings = await getBettingsByUserId(seededBettings[0].userId);

    expect(bettings.data).toEqual(seededBettings); // Checks if the seeded bettings are the same as the bettings returned from the API
    expect(Array.isArray(bettings.data)).toBe(true);
  });

  it("should get all bettings", async () => {
    const bettings = await getAllBettings();
    expect(Array.isArray(bettings.data)).toBe(true);
    expect(bettings.status).toBe(200);
  });

  it("should get highest three bettings", async () => {
    const bettings = await getHighestBettings();
    expect(Array.isArray(bettings.data)).toBe(true);
    expect(bettings.status).toBe(200);
    expect(bettings.data.length).toBeLessThanOrEqual(3);
  });

  afterAll(async () => {
    await deleteSeededBettings(seededBettings);
  });
});
