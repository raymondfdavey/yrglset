import React from "react";

function CompletedGoals(props) {
  return (
    <>
      <ul className="completedGoalList">
        <li className="completedGoalsTitles">
          <p className="completedWhat">What</p>
          <p className="completedWhy">Why </p>
          <p className="completedThoughts">Thoughts once you did it</p>
        </li>
        {props.apiGoals.map((entry, i) => {
          if (entry.completed === true && entry.deleted === false) {
            return (
              <li className="completedGoalItem" key={entry.goal}>
                <p className="completedWhat">{entry.goal}</p>
                <p className="completedWhy">{entry.reason}</p>
                <p className="completedThoughts">{entry.thoughts}</p>
                <button
                  onClick={() => props.removeCompletedItem(entry)}
                  className="btnComplete"
                >
                  <i className="fa fa-close"></i>
                </button>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </>
  );
}

export default CompletedGoals;
