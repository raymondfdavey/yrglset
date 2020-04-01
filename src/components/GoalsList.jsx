import React from "react";

function GoalsList(props) {
  return (
    <>
      {props.goals.map((entry, i) => {
        return (
          <li
            key={`goal ${i}`}
            className={i % 2 === 0 ? "goalListItem2" : "goalListItem1"}
          >
            <p className="goal">{entry.goal}</p>
            <p className="reason">{entry.reason}</p>
            <button
              onClick={() => {
                props.removeItem(i);
              }}
              className="btn"
            >
              remove
            </button>
            <button
              className="didItButton"
              onClick={() => {
                props.toggle(i);
              }}
            >
              I DID IT!!!
            </button>
          </li>
        );
      })}
    </>
  );
}

export default GoalsList;
