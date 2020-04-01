import React, { Component } from "react";
import Header from "./components/Header";
import Year from "./components/Year";
import Goals from "./components/Goals";
import CompletedGoals from "./components/CompletedGoals";
import HeaderComplete from "./components/HeaderComplete";

class App extends Component {
  state = {
    year: 2020,
    completedGoals: [
      { goal: "something", reason: "not sure", thoughts: "really regret it" }
    ],
    value: "",
    on: false,
    index: ""
  };
  render() {
    const { year } = this.state;
    return (
      <div className="page">
        <Header />
        <Year year={year} />
        <Goals handleSubmitUpdateCompleted={this.handleSubmitUpdateCompleted} />
        <HeaderComplete year={year} />
        <CompletedGoals
          completedGoals={this.state.completedGoals}
          removeCompletedItem={this.removeCompletedItem}
        />
      </div>
    );
  }

  removeCompletedItem = index => {
    this.setState(currentState => {
      console.log("YOYO IN HERE");

      const filteredGoals = currentState.completedGoals.filter((goal, i) => {
        if (i !== index) return goal;
        else return null;
      });
      return { completedGoals: filteredGoals };
    });
  };

  handleSubmitUpdateCompleted = completedGoal => {
    this.setState(currentState => {
      const newCompleteList = [...currentState.completedGoals];
      newCompleteList.unshift(completedGoal);
      return {
        completedGoals: newCompleteList
      };
    });
  };
}

export default App;

// FURTHER FUNCTIONALITY IF SERVER-BASED -> STORE PREVIOUS YEARS AND THEN NAVIGATE BETWEEN THEM WITH ARROW BUTTONS EITHER SIDE OF THE YEAR AT THE TOP
// VIEW DELETED GOALS
// CLICK ON TASK TO GO TO TASK PAGE WITH NOTES AND ANY OTHER INFO ABOUT IT
