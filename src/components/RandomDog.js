import React from "react";
import "./RandomDog.css";

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      randomDog: []
    };
  }

  componentDidMount() {
    const randomDogLink = "https://dog.ceo/api/breeds/image/random";
    fetch(randomDogLink)
      .then(data => data.json())
      .then(randompic => {
        this.setState({ randomDog: randompic.message });
      });
  }

  saveImage = () => {
    console.log("Save button is being clicked");
  };

  getNextImage = () => {
    return this.componentDidMount();
  };
  render() {
    return (
      <div className="RandomDog">
        <h2 className="RandomDog-title">Random Dogs</h2>
        <img className="RandomDog-image" src={this.state.randomDog} />
        <p>
          <button className="RandomDog-button" onClick={this.saveImage}>
            Save Image
          </button>
          <button className="RandomDog-button" onClick={this.getNextImage}>
            Next Dog
          </button>
        </p>
      </div>
    );
  }
}

export default RandomDog;
