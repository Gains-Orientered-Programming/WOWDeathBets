import { getCharacterProfile } from "../../api/blizzard-service/characterProfile";

interface BlizzardAPIError {
  response: {
    status: number;
    data: {
      type: string;
      detail: string;
    };
  };
}

describe("Blizzard API", () => {
  test("Get character information - Success", async () => {
    const characterName = "petrice";
    const realm = "nekrosh";
    const region = "eu";
    try {
      const characterInformation = await getCharacterProfile({
        region,
        realm,
        characterName,
      });
      expect(characterInformation).toHaveProperty("name");
      expect(characterInformation).toHaveProperty("level");
    } catch (error) {
      fail(error);
    }
  });

  test("Get character information - Invalid Character", async () => {
    const characterName = "InvalidCharacter";
    const realm = "nekrosh";
    const region = "eu";

    try {
      await getCharacterProfile({ region, realm, characterName });
      fail(
        "Expected request to fail for an invalid character, but it succeeded."
      );
    } catch (error) {
      const apiError = error as BlizzardAPIError;
      expect(apiError.response.status).toEqual(404);
      expect(apiError.response.data).toEqual({
        code: 404,
        type: "BLZWEBAPI00000404",
        detail: "Not Found",
      });
    }
  });

  test("Get character information - Invalid Realm", async () => {
    const characterName = "petrice";
    const realm = "InvalidRealm";
    const region = "eu";

    try {
      await getCharacterProfile({ region, realm, characterName });
      // If the API returns data for an invalid realm,
      // it might indicate an issue, so you can fail the test
      fail("Expected request to fail for an invalid realm, but it succeeded.");
    } catch (error) {
      const apiError = error as BlizzardAPIError;
      // Expecting an error due to the invalid realm
      expect(apiError.response.status).toEqual(404);
      expect(apiError.response.data).toEqual({
        code: 404,
        type: "BLZWEBAPI00000404",
        detail: "Not Found",
      });
    }
  });
});
