import React from "react";
import "./StarWars.css";
import Film from "./Film";

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    this.getFilms(this.props.character.films[0]);
  }
  
//   getFilms = URL => {
//       fetch(URL)
//       .then(res => {
//         return res.text();
//       })
//       .then(text => {
//           return JSON.parse(text);
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(err => {
//           throw new Error(err);
//       });
//   };
getFilms = URL => {
    fetch(URL)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
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
          <div>
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
