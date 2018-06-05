import React from "react";
import "./Breeds.css";

class Breeds extends React.Component {
  constructor() {
    super();
    this.state = {
      beagle: "",
      blueTickDogs: "",
      BullterrierDogs: "",
      MalinoisDogs: "",
      WolfhoundDogs: ""
    };
  }

  componentDidMount() {
    // this.getNextImage();
    // this.getBluceTick();
    // this.getBullterrier();
    // this.getMalinois();
    this.getWolfhound();
  }

  getNextImage = () => {
    const BeagleLink = "https://dog.ceo/api/breed/beagle/images/random";
    fetch(BeagleLink)
      .then(data => data.json())
      .then(dogs => {
        const beagledog = dogs.message;
        this.setState({ beagle: beagledog });
        // dogsArray[Math.floor(Math.random() * dogsArray.length)]
      });
  };

  getBluceTick = () => {
    const bluetickRandomLink =
      "https://dog.ceo/api/breed/bluetick/images/random";
    fetch(bluetickRandomLink)
      .then(data => data.json())
      .then(blueTickDogs => {
        const blueTickDog = blueTickDogs.message;
        this.setState({ blueTickDogs: blueTickDog });
        console.log(this.state.blueTickDogs);
      });
  };

  getBullterrier = () => {
    const BullterrierRandomLink =
      "  https://dog.ceo/api/breed/bullterrier/staffordshire/images/random";
    fetch(BullterrierRandomLink)
      .then(data => data.json())
      .then(BullterrierDogs => {
        const BullterrierDog = BullterrierDogs.message;
        this.setState({ BullterrierDogs: BullterrierDog });
        console.log(this.state.BullterrierDogs);
      });
  };

  getMalinois = () => {
    const MalinoisRandomLink =
      " https://dog.ceo/api/breed/malinois/images/random";
    fetch(MalinoisRandomLink)
      .then(data => data.json())
      .then(MalinoisDogs => {
        const MalinoisDog = MalinoisDogs.message;
        this.setState({ MalinoisDogs: MalinoisDog });
        console.log(this.state.MalinoisDogs);
      });
  };

  getWolfhound = () => {
    const WolfhoundRandomLink =
      "https://dog.ceo/api/breed/wolfhound/irish/images/random";
    fetch(WolfhoundRandomLink)
      .then(data => data.json())
      .then(WolfhoundDogs => {
        const WolfhoundDog = WolfhoundDogs.message;
        this.setState({ WolfhoundDogs: WolfhoundDog });
        console.log(this.state.WolfhoundDogs);
      });
  };

  render() {
    return (
      <div className="Breeds">
        <h2 className="Breeds-title">Select a Breed</h2>
        <p>
          <select className="Breeds-select">
            <option value="beagle">beagle</option>
            <option>bluetick</option>
            <option>bullterrier-staffordshire</option>
            <option>malinois</option>
            <option>wolfhound-irish</option>
          </select>
        </p>
        {/* <img className="Breeds-image" src={this.state.beagle} /> */}
        {/* <img className="Breeds-image" src={this.state.blueTickDogs} /> */}
        {/* <img className="Breeds-image" src={this.state.BullterrierDogs} /> */}
        {/* <img className="Breeds-image" src={this.state.MalinoisDogs} /> */}
        <img className="Breeds-image" src={this.state.WolfhoundDogs} />

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
