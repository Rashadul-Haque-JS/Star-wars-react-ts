import React from "react";
import { Character } from "../types/characterType";
const StarCharacter = (character: Character) => {
  // or {character}:{character:Character}
  return (
    <div className="card col-md-4 p-0 mt-3 ">
      <div className="card-header m-0  ">
        <h1 className="h5 text-center ">{character.name}</h1>
      </div>
      <div className="card-body ">
        <ul className="text-light">
          <li> Height: {character.height} cm</li>
          <li> Mass: {character.mass} {character.mass ==='unknown'? '':'kg'}</li>
          <li>Hair Color: {character.hair_color}</li>
          <li>Skin: {character.skin_color}</li>
          <li>Eye color: {character.eye_color}</li>
          <li>DOB: {character.birth_year}</li>
          <li>Gender: {character.gender}</li>
        </ul>
      </div>
      <div className="mask"></div>
      <span className="me">@Rash</span>
    </div>
  );
};

export default StarCharacter;
