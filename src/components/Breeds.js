import React from "react";
import "./Breeds.css";

class Breeds extends React.Component {
  constructor() {
    super();
    this.state = {
      BeagleBreed: []
    };
  }

  componentDidMount() {
    this.getNextImage();
  }

  getNextImage = () => {
    const BeagleLink = "https://dog.ceo/api/breed/beagle/images";
    fetch(BeagleLink)
      .then(data => data.json())
      .then(dogs => {
        const dogsArray = dogs.message;
        this.setState({
          BeagleBreed: dogsArray[Math.floor(Math.random() * dogsArray.length)]
        });
      });
  };

  render() {
    return (
      <div className="Breeds">
        <h2 className="Breeds-title">Select a Breed</h2>
        <p>
          <select className="Breeds-select">
            <option>beagle</option>
            <option>bluetick</option>
            <option>bullterrier-staffordshire</option>
            <option>malinois</option>
            <option>wolfhound-irish</option>
          </select>
        </p>
        <img className="Breeds-image" src={this.state.BeagleBreed} />
        <p>
          <button className="Breeds-button" onClick={this.getNextImage}>
            Show me more!
          </button>
        </p>
      </div>
    );
  }
}

export default Breeds;
