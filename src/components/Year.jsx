import React from "react";

function Year(props) {
  return (
    <div className="year">
      <p
        className="increment"
        onClick={() => {
          props.changeYear(-1);
        }}
      >
        -
      </p>
      <h2>{props.year}</h2>
      <p
        className="increment"
        onClick={() => {
          props.changeYear(1);
        }}
      >
        +
      </p>
    </div>
  );
}

export default Year;
