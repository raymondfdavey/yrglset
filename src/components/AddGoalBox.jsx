import React from "react";

function AddGoalBox(props) {
  return (
    <>
      {props.addGoal && (
        <form className="newGoalContainer" onSubmit={props.handleNewGoalSubmit}>
          <label>new goal: </label>
          <input
            type="text"
            value={props.newGoalValue}
            onChange={props.handleGoalValueChange}
            className="newGoalText"
            placeholder="what is it?"
          ></input>
          <input
            type="text"
            value={props.newGoalReasonValue}
            onChange={props.handleGoalReasonsValueChange}
            className="newGoalReasonText"
            placeholder="any particular reason(s)?..."
          ></input>
          <input className="submit" type="submit" value="Submit"></input>
        </form>
      )}
    </>
  );
}

export default AddGoalBox;
