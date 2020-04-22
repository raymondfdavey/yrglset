import React, { Component } from "react";

import Header from "./components/Header";
import Year from "./components/Year";
import Goals from "./components/Goals";
import CompletedGoals from "./components/CompletedGoals";
import HeaderComplete from "./components/HeaderComplete";
import * as api from "./API/api";
import LoginBox from "./components/LoginBox";
import { Router } from "@reach/router";

class NewHome extends Component {
  state = {
    year: "",
    value: "",
    on: false,
    index: "",
    goals: null,
  };
  render() {
    return this.state.goals === null ? (
      <p>loading</p>
    ) : (
      <div className="mainBody">
        <Year year={this.state.year} changeYear={this.changeYear} />
        <Goals
          updateGoalsNewGoal={this.updateGoalsNewGoal}
          updateGoalsDeletedGoal={this.updateGoalsDeletedGoal}
          updateGoalsCompletedGoal={this.updateGoalsCompletedGoal}
          year={this.state.year}
          apiGoals={this.state.goals}
          handleSubmitUpdateCompleted={this.handleSubmitUpdateCompleted}
        />
        <HeaderComplete year={this.state.year} />
        <CompletedGoals
          apiGoals={this.state.goals}
          removeCompletedItem={this.removeCompletedItem}
        />
      </div>
    );
  }

  removeCompletedItem = (entry) => {
    api.removeItem(entry).then(this.updateGoalsDeletedGoal(entry));
  };

  componentDidMount() {
    const date = new Date();
    const year = date.getFullYear();
    api.fetchGoalsByYear(year).then((goals) => {
      this.setState({ goals, year });
    });
  }

  changeYear = (increment) => {
    let year = this.state.year;
    const newYear = (year += increment);
    api
      .fetchGoalsByYear(newYear)
      .then((goals) => this.setState({ goals, year: newYear }));
  };

  updateGoalsNewGoal = (newGoal) => {
    this.setState((currentState) => {
      return { goals: [...currentState.goals, newGoal] };
    });
  };
  updateGoalsDeletedGoal = (goalToDelete) => {
    this.setState((currentState) => {
      const goalsNow = [...currentState.goals];
      const filteredGoals = goalsNow.filter(
        (goal) => goal.goal_id !== goalToDelete.goal_id
      );
      return { goals: filteredGoals };
    });
  };
  updateGoalsCompletedGoal = (completedGoal) => {
    console.log(completedGoal, "UPDATE COMPLETD");
    this.setState((currentState) => {
      const updatedGoals = currentState.goals.map((goal) => {
        if (completedGoal.goal_id === goal.goal_id) {
          return completedGoal;
        } else {
          return goal;
        }
      });
      return { goals: updatedGoals, value: "", on: false };
    });
    // this.setState(currentState => {
    //   };
    // });
  };
}

export default NewHome;
