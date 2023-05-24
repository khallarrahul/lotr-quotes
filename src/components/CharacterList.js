import Character from "./Character";

const CharacterList = ({ characters }) => {
  const buildCharacterComponents = () => {
    return characters.map((char) => <Character character={char} key={char.name} />);
  };

  return <div className="characters-flex">{buildCharacterComponents()}</div>;
};

export default CharacterList;
