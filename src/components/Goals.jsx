import React, { Component } from "react";
import GoalsTitles from "./GoalsTitles";
import AddGoalBox from "./AddGoalBox";
import GoalsList from "./GoalsList";
import CompletedTaskBox from "./CompletedTaskBox";
import * as api from "../API/api";

class Goals extends Component {
  state = {
    completedGoal: "",
    addGoal: false,
    newGoalValue: "",
    newGoalReasonValue: "",
    value: "",
    on: false
  };
  render() {
    return (
      <>
        <ul className="goalsList">
          <GoalsTitles toggleNewGoal={this.toggleNewGoal} />
          <GoalsList
            apiGoals={this.props.apiGoals}
            removeItem={this.removeItem}
            toggle={this.toggle}
          />
        </ul>
        <AddGoalBox
          addGoal={this.state.addGoal}
          newGoalValue={this.state.newGoalValue}
          handleNewGoalSubmit={this.handleNewGoalSubmit}
          handleGoalValueChange={this.handleGoalValueChange}
          newGoalReasonValue={this.state.newGoalReasonValue}
          handleGoalReasonsValueChange={this.handleGoalReasonsValueChange}
        />
        <CompletedTaskBox
          completedGoal={this.state.completedGoal}
          on={this.state.on}
          handleSubmitUpdateGoals={this.handleSubmitUpdateGoals}
          value={this.state.value}
          handleChange={this.handleChange}
        />
      </>
    );
  }
  handleSubmitUpdateGoals = event => {
    event.preventDefault();
    api
      .completeGoal(this.state.completedGoal, this.state.value, this.props.year)
      .then(([completedGoal]) =>
        this.props.updateGoalsCompletedGoal(completedGoal)
      )
      .then(this.setState({ on: false, value: "" }));
  };

  toggle = entry => {
    this.setState({
      on: !this.state.on,
      completedGoal: entry,
      addGoal: false
    });
  };

  removeItem = entry => {
    api.removeItem(entry).then(this.props.updateGoalsDeletedGoal(entry));
  };

  handleNewGoalSubmit = event => {
    const newGoal = {
      year: this.props.year,
      goal: this.state.newGoalValue,
      reason: this.state.newGoalReasonValue
    };
    api
      .addNewGoal(newGoal, this.props.year)
      .then(([addedGoal]) => this.props.updateGoalsNewGoal(addedGoal))
      .then(
        this.setState({
          addGoal: false,
          newGoalValue: "",
          newGoalReasonValue: ""
        })
      );
    // .then(this.props.updateGoals(this.props.year));
  };

  handleGoalValueChange = event => {
    this.setState({ newGoalValue: event.target.value });
  };

  handleGoalReasonsValueChange = event => {
    this.setState({
      newGoalReasonValue: event.target.value
    });
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  toggleNewGoal = () => {
    this.setState({ addGoal: !this.state.addGoal, on: false });
  };
}

export default Goals;
