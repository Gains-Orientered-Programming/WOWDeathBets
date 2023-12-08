import {
  getAllBettings,
  getBettingsByUserId,
  getHighestBettings,
  createBetting,
} from "../../../api/betting-services";
import axios from "axios";

jest.mock("axios");

describe("Betting Service Tests", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a betting", async () => {
    const mockBettingData = {
      userId: "123",
      characterName: "Petrice",
      region: "eu",
      realm: "nekrosh",
      amount: 1000,
    };
    const mockResponse = {
      data: {
        userId: "123",
        characterName: "Petrice",
        region: "eu",
        realm: "nekrosh",
        amount: 1000,
      },
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse.data);

    const result = await createBetting(mockBettingData);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings",
      mockBettingData
    );
    expect(result).toEqual(mockResponse.data);
  });

  it("should get bettings by user ID", async () => {
    const mockUserId = "123";
    const mockResponse = {
      data: [
        {
          _id: "6093eb433fc0a31f2cc1cc83", // Mocked ID
          userId: "test",
          characterName: "test_characterName",
          region: "test_region",
          realm: "test_realm",
          amount: 0,
        },
        {
          _id: "7093eb433fc0a31f2cc1cc84", // Mocked ID
          userId: "test",
          characterName: "test_characterName2",
          region: "test_region",
          realm: "test_realm",
          amount: 0,
        },
      ],
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await getBettingsByUserId(mockUserId);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings/userId/${mockUserId}`
    );
    expect(result.data).toEqual(mockResponse.data);
  });

  it("should get all bettings", async () => {
    const mockResponse = {
      data: [
        {
          _id: "6093eb433fc0a31f2cc1cc83", // Mocked ID
          userId: "test",
          characterName: "test_characterName",
          region: "test_region",
          realm: "test_realm",
          amount: 0,
        },
        {
          _id: "7093eb433fc0a31f2cc1cc84", // Mocked ID
          userId: "test",
          characterName: "test_characterName2",
          region: "test_region",
          realm: "test_realm",
          amount: 0,
        },
      ],
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await getAllBettings();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings"
    );
    expect(result.data).toEqual(mockResponse.data);
  });

  it("should get highest bettings", async () => {
    const mockResponse = {
      data: [
        {
          _id: "6093eb433fc0a31f2cc1cc83", // Mocked ID
          userId: "test",
          characterName: "test_characterName",
          region: "test_region",
          realm: "test_realm",
          amount: 0,
        },
        {
          _id: "7093eb433fc0a31f2cc1cc84", // Mocked ID
          userId: "test",
          characterName: "test_characterName2",
          region: "test_region",
          realm: "test_realm",
          amount: 0,
        },
      ],
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await getHighestBettings();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://api-gateway-nyxm4.ondigitalocean.app/betting-service/bettings/most"
    );
    expect(result.data).toEqual(mockResponse.data);
  });
});
