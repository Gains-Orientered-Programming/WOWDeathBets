import React from "react";
import { CharacterProfileSummary } from "../types/blizzard/characterProfileSummary.t";
import { getDataFromApi } from "../services/oAuth";

export const CharacterProfileSummaryContext = React.createContext<
  CharacterProfileSummary | undefined
>(undefined);

export default function CharacterProfileSummaryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [characterProfile, setCharacterProfile] = React.useState<
    CharacterProfileSummary | undefined
  >();

  React.useEffect(() => {
    async function getCharacterProfileSummary() {
      const params = {
        "namespace": "profile-classic1x-eu",
        "locale": "eu_GB",
      };
      const data = await getDataFromApi<CharacterProfileSummary>(
        "eu",
        `/profile/wow/character/nekrosh/${characterName}`,
        params
      );
      setCharacterProfile(data);
    }
    getCharacterProfileSummary();
  }, [characterName]);

  return (
    <CharacterProfileSummaryContext.Provider value={characterProfile}>
      {children}
    </CharacterProfileSummaryContext.Provider>
  );
}
