import CharacterProfileSummaryProvider from "./characterProfile";

const StaticProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CharacterProfileSummaryProvider>
        {children}
      </CharacterProfileSummaryProvider>
    </>
  );
};
