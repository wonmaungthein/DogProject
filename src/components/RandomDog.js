import React from "react";
import "./RandomDog.css";
<<<<<<< HEAD

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
=======
class RandomDog extends React.Component {
>>>>>>> master
  render() {
    return (
      <div className="RandomDog">
        <h2 className="RandomDog-title">Random Dogs</h2>
        <img
          className="RandomDog-image"
          src="http://via.placeholder.com/300x300"
        />
        <p>
<<<<<<< HEAD
          <button className="RandomDog-button" onClick={this.saveImage}>
            Save Image
          </button>
          <button className="RandomDog-button" onClick={this.getNextImage}>
            Next Dog
          </button>
=======
          <button className="RandomDog-button">Save Image</button>
          <button className="RandomDog-button">Next Dog</button>
>>>>>>> master
        </p>
      </div>
    );
  }
}

export default RandomDog;
