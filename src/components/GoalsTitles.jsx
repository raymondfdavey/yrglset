import React from "react";

function GoalsTitles(props) {
  return (
    <li className="goalsTitle" key="goalsTitle">
      <p className="thingsIWannaDo">Things I wanna do</p>
      <p className="butWhy">But Why?</p>
      <button className="addGoalButton" onClick={props.toggleNewGoal}>
        add a goal
      </button>
    </li>
  );
}

export default GoalsTitles;
