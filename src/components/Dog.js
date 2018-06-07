import React from "react";
import "./Dog.css";

function Dog(props) {
  return (
    <div className="Dog">
      <img className="Dog-image" src={props.image} />
      <p>
        <button className="Dog-button" onclick="myFunction()">
          Best Dog
        </button>
      </p>
    </div>
  );
}

export default Dog;
