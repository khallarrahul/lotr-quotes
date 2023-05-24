import React from "react";
import QuoteList from "./QuoteList";

function Character({ character }) {
  const { name, race, status, weapon, image, quotes } = character;
  return (
    <div className="character">
      <img src={image} alt={`Character Portrait of ${name}`} />
      <h2>{name}</h2>
      <p>{race}</p>
      <p>{status}</p>
      <p>{weapon}</p>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default Character;
