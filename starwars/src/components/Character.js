import React from "react";
import "./StarWars.css";
import Film from "./Film";

const Character = props => {
  return (
    <div className="character">
      <h3>Name: {props.character.name}</h3>
      <h5>Gender: {props.character.gender}</h5>
      <h5>Born: {props.character.birth_year}</h5>
      <div>
        <p>
          Height: {props.character.height} - Mass: {props.character.mass}
        </p>
        <p>
          Hair Color: {props.character.hair_color} - Eye-Color:{" "}
          {props.character.eye_color}
        </p>
        <div>
          {props.character.films.map(film => {
            return <Film film={film} key={film} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
