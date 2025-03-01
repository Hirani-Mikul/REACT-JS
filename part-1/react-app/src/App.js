import React from "react";

import "./style.css";

import Loader from "./Loader";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: {},
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          character: data,
        });
      });
  }
  render() {
    const person = this.state.character;
    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ul>
            <li>
              <span>Name: </span>
              <span>{person.name}</span>
            </li>
            <li>
              <span>Heigth: </span>
              <span>{person.height}</span>
            </li>
            <li>
              <span>Gender: </span>
              <span>{person.gender}</span>
            </li>
            <li>
              <span>Eye-Color: </span>
              <span>{person.eye_color}</span>
            </li>
            <li>
              <span>Skin-Color: </span>
              <span>{person.skin_color}</span>
            </li>
          </ul>
        )}
      </div>
    );
  }
}
