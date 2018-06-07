import React from "react";
import Dog from "./Dog.js";
import "./DogBattle.css";

class DogBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      DogBattle: "",
      DogBattle1: ""
    };
  }

  componentDidMount() {
    this.getNextImage();
    this.getNextImage1();
  }
  getNextImage = () => {
    const randomDogLink = "https://dog.ceo/api/breeds/image/random";
    fetch(randomDogLink)
      .then(data => data.json())
      .then(randompic => {
        this.setState({ DogBattle: randompic.message });
      });
  };
  getNextImage1 = () => {
    const randomDogLink1 = "https://dog.ceo/api/breeds/image/random";
    fetch(randomDogLink1)
      .then(data => data.json())
      .then(randompic => {
        this.setState({ DogBattle1: randompic.message });
      });
  };

  render() {
    return (
      <div className="DogBattle">
        <h2 className="DogBattle-title">Choose the best dog</h2>
        <div className="DogBattle-images">
          <Dog image={this.state.DogBattle} />
          <Dog image={this.state.DogBattle1} />
          <p>my dogs battle</p>
        </div>
      </div>
    );
  }
}

export default DogBattle;
