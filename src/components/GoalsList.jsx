import React from "react";

function GoalsList(props) {
  return (
    <>
      {props.apiGoals.map((entry, i) => {
        if (entry.completed === false && entry.deleted === false) {
          return (
            <li
              key={`goal ${i}`}
              className={i % 2 === 0 ? "goalListItem2" : "goalListItem1"}
            >
              <p className="goal">{entry.goal}</p>
              <p className="reason">{entry.reason}</p>
              <button
                onClick={() => {
                  props.removeItem(entry, i);
                }}
                className="btn"
              >
                remove
              </button>
              <button
                className="didItButton"
                onClick={() => {
                  props.toggle(entry);
                }}
              >
                I DID IT!!!
              </button>
            </li>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

export default GoalsList;
