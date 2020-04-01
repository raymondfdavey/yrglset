import React from "react";

function CompletedTaskBox(props) {
  return (
    <>
      {props.on && (
        <form
          className="thoughtsContainer"
          onSubmit={props.handleSubmitUpdateGoals}
        >
          <label>Thoughts?</label>
          <input
            type="text"
            value={props.value}
            onChange={props.handleChange}
            className="thoughts"
            placeholder="How did it go?"
          />
          <input className="submit" type="submit" value="Submit"></input>
        </form>
      )}
    </>
  );
}

export default CompletedTaskBox;
