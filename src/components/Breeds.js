import React from "react";
import "./Breeds.css";

class Breeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beagle: "",
      bluetick: "",
      bullterrier: "",
      malinois: "",
      wolfhound: "",
      value: "beagle"
    };
    this.handleChange = this.handleChange.bind(this);
    this.matchSelection = this.matchSelection.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    const selectedValue = this.state.value;
  }

  matchSelection(event) {
    if (this.state.value === "beagle") {
      this.state.beagle = this.getBeagle();
    } else if (this.state.value === "bluetick") {
      this.state.bluetick = this.getBluceTick();
    } else if (this.state.value === "bullterrier") {
      this.state.bullterrier = this.getBullterrier();
    } else if (this.state.value === "malinois") {
      this.state.malinois = this.getMalinois();
    } else if (this.state.value === "wolfhound") {
      this.state.wolfhound = this.getWolfhound();
    }
    event.preventDefault();
  }

  componentDidMount() {
    this.getNextImage();
  }

  getNextImage = () => {
    this.matchSelection;
  };

  getBeagle = () => {
    const BeagleLink = "https://dog.ceo/api/breed/beagle/images/random";
    fetch(BeagleLink)
      .then(data => data.json())
      .then(dogs => {
        const beagledog = dogs.message;
        this.setState({
          beagle: beagledog
        });
      });
  };

  getBluceTick = () => {
    const bluetickRandomLink =
      "https://dog.ceo/api/breed/bluetick/images/random";
    fetch(bluetickRandomLink)
      .then(data => data.json())
      .then(bluetick => {
        const blueTickDog = bluetick.message;
        this.setState({ bluetick: blueTickDog });
      });
  };

  getBullterrier = () => {
    const BullterrierRandomLink =
      "https://dog.ceo/api/breed/bullterrier/staffordshire/images/random";
    fetch(BullterrierRandomLink)
      .then(data => data.json())
      .then(Bullterrier => {
        const BullterrierDog = Bullterrier.message;
        this.setState({ bullterrier: BullterrierDog });
      });
  };

  getMalinois = () => {
    const MalinoisRandomLink =
      " https://dog.ceo/api/breed/malinois/images/random";
    fetch(MalinoisRandomLink)
      .then(data => data.json())
      .then(MalinoisDogs => {
        const MalinoisDog = MalinoisDogs.message;
        this.setState({ malinois: MalinoisDog });
      });
  };

  getWolfhound = () => {
    const WolfhoundRandomLink =
      "https://dog.ceo/api/breed/wolfhound/irish/images/random";
    fetch(WolfhoundRandomLink)
      .then(data => data.json())
      .then(WolfhoundDogs => {
        const WolfhoundDog = WolfhoundDogs.message;
        this.setState({ wolfhound: WolfhoundDog });
      });
  };

  render() {
    return (
      <div className="Breeds">
        <form onSubmit={this.matchSelection}>
          <h2 className="Breeds-title">Select a Breed</h2>
          <p>
            <select
              className="Breeds-select"
              value={this.state.value}
              onChange={this.handleChange}
              ref="dogselector"
            >
              <option value="beagle">beagle</option>
              <option value="bluetick">bluetick</option>
              <option value="bullterrier">bullterrier-staffordshire</option>
              <option value="malinois">malinois</option>
              <option value="wolfhound">wolfhound-irish</option>
            </select>
          </p>
          {(() => {
            switch (this.state.value) {
              case "beagle":
                return <img className="Breeds-image" src={this.state.beagle} />;
              case "bluetick":
                return (
                  <img className="Breeds-image" src={this.state.bluetick} />
                );
              case "bullterrier":
                return (
                  <img className="Breeds-image" src={this.state.bullterrier} />
                );
              case "malinois":
                return (
                  <img className="Breeds-image" src={this.state.malinois} />
                );
              case "wolfhound":
                return (
                  <img className="Breeds-image" src={this.state.wolfhound} />
                );
            }
          })()}
          <p>
            <button className="Breeds-button" onClick={this.getNextImage}>
              Next Image
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default Breeds;
