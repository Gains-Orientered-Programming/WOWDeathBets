// blizzardService.test.js
import { getCharacterEquipment } from "../characterEquipment";
import axios, { AxiosStatic } from "axios";

jest.mock("axios"); // Mock Axios to prevent actual network calls

const mockedAxios = axios as jest.Mocked<AxiosStatic>;

describe("Blizzard Service Tests", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all Axios mocks after each test
  });

  it("should fetch character equipment", async () => {
    const characterName = "Petrice";
    const region = "eu";
    const realm = "nekrosh";
    const mockCharacterData = {
      /* Your mocked character data */
    };

    // Mock Axios.get to simulate a successful response
    mockedAxios.get.mockResolvedValueOnce({ data: mockCharacterData });

    const characterInfo = await getCharacterEquipment({
      characterName: characterName,
      region: region,
      realm: realm,
    });

    expect(characterInfo).toEqual(mockCharacterData);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `/profile/wow/character/${realm}/${characterName}/equipment`
    );
  });

  // Add more tests for other functions in the blizzardService file
});
