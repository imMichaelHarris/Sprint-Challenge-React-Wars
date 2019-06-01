import React from "react";
import "./StarWars.css";
import Film from "./Film";

class Character extends React.Component {
  state = {
    films: []
  };

  render() {
    return (
      <div className="character">
        <h3>Name: {this.props.character.name}</h3>
        <h5>Gender: {this.props.character.gender}</h5>
        <h5>Born: {this.props.character.birth_year}</h5>
        <div>
          <p>
            Height: {this.props.character.height} - Mass:{" "}
            {this.props.character.mass}
          </p>
          <p>
            Hair Color: {this.props.character.hair_color} - Eye-Color:{" "}
            {this.props.character.eye_color}
          </p>
          <div className="appeared">
            <h3>Appeared in</h3>
            {this.props.character.films.map(film => {
              return <Film film={film} key={film} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
