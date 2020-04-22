import React from "react";

function HeaderComplete(props) {
  return (
    <div>
      <h3 className="year">{props.year}'s completed goals</h3>
    </div>
  );
}

export default HeaderComplete;
