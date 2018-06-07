import React, { Component } from "react";
import Favourites from "./components/Favourites";
import RandomDog from "./components/RandomDog";
import DogBattle from "./components/DogBattle";
import Breeds from "./components/Breeds";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favouriteBreeds: [],
      savedPhotos: [
        "http://via.placeholder.com/80x80",
        "http://via.placeholder.com/80x80"
      ]
    };
  }

  dogSaved = randomDog => {
    // update savedPhotos state

    // var firstDog = this.state.savedPhotos[0];
    // var secondDog = this.state.savedPhotos[1];

    // secondDog = firstDog;
    // firstDog = randomDog;

    // this.setState({
    //   savedPhotos: [firstDog, secondDog]
    this.setState({
      savedPhotos: this.state.savedPhotos

        .splice(0)
        .concat(randomDog)
        .reverse()
        .concat(randomDog)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs!</h1>
        </header>
        <Favourites
          image1={this.state.savedPhotos[0]}
          image2={this.state.savedPhotos[1]}
        />
        <RandomDog dogSaved={this.dogSaved} />
        <DogBattle />
        <Breeds />
      </div>
    );
  }
}

export default App;
