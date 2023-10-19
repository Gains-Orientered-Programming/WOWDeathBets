const CharacterPage = ({
  params,
}: {
  params: { region: string; realm: string; characterName: string };
}) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>region: {params.region}</div>
        <div>realm: {params.realm}</div>
        <div>characterName: {params.characterName}</div>
      </div>
    </>
  );
};

export default CharacterPage;
