import React from "react";
import "./RandomDog.css";

fetch("https://dog.ceo/api/breeds/image/random")
  .then(data => data.json())
  .then(randompic => {
    randompic;
  });

class RandomDog extends React.Component {
  saveImage = () => {
    console.log("Save button is being clicked");
  };

  getNextImage = () => {
    console.log("Let's get another img");
  };
  render() {
    return (
      <div className="RandomDog">
        <h2 className="RandomDog-title">Random Dogs</h2>
        <img
          className="RandomDog-image"
          src="http://via.placeholder.com/300x300"
        />
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
