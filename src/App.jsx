import React from "react";
import CharacterList from "./components/CharacterList";
import "./index.css";
import Header from "./components/Header";
import { characters } from "./db";
import QuoteList from "./components/QuoteList";

const App = () => {
  return (
    <div>
      <Header />
      {/* Pass the characters array as a prop to CharacterList */}
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
