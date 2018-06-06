import React from "react";
import Dog from "./Dog.js";
import "./DogBattle.css";

class DogBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      DogBattle: []
    };
  }
  render() {
    return (
      <div className="DogBattle">
        <h2 className="DogBattle-title">Choose the best dog</h2>
        <div className="DogBattle-images">
          <Dog
            image="http://via.placeholder.com/300x300"
            src="http://via.placeholder.com/300x300"
          />
          <Dog
            image="http://via.placeholder.com/300x300"
            src="http://via.placeholder.com/300x300"
          />
          <p>my dogs battle</p>
        </div>
      </div>
    );
  }
}

export default DogBattle;
