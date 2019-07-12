import React from "react";

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        film: {}
    }
  }
  componentDidMount() {
    fetch(this.props.film)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
            film: data
        });
      });
  }
  render() {
    return <h4 className="film">{this.state.film.title}</h4>; //Needs to fetch this data...
  }
}

export default Film;
