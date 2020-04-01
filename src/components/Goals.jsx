import React, { Component } from "react";
import GoalsTitles from "./GoalsTitles";
import AddGoalBox from "./AddGoalBox";
import GoalsList from "./GoalsList";
import CompletedTaskBox from "./CompletedTaskBox";

class Goals extends Component {
  state = {
    goals: [
      { goal: "Visit Hullshshg", reason: "whales and stuff" },
      {
        goal: "learn to bake a cookie",
        reason: "so i have a go-to baked good"
      },
      { goal: "write up big trip", reason: "to reconnect" }
    ],
    index: "",
    addGoal: false,
    newGoalValue: "",
    newGoalReasonValue: "",
    value: ""
  };
  render() {
    return (
      <>
        <ul className="goalsList">
          <GoalsTitles toggleNewGoal={this.toggleNewGoal} />
          <GoalsList
            goals={this.state.goals}
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
    this.setState(currentState => {
      const completedGoal = { ...currentState.goals[currentState.index] };
      completedGoal.thoughts = currentState.value;
      this.props.handleSubmitUpdateCompleted(completedGoal);
      const filteredGoals = currentState.goals.filter((goal, i) => {
        if (i !== currentState.index) return goal;
        else return null;
      });
      return {
        goals: filteredGoals,
        value: "",
        on: false
      };
    });
  };

  toggle = i => {
    this.setState({ on: !this.state.on, index: i, addGoal: false });
  };

  removeItem = index => {
    this.setState(currentState => {
      const filteredGoals = currentState.goals.filter((goal, i) => {
        if (i !== index) return goal;
        else return null;
      });
      return {
        goals: filteredGoals,
        addGoal: false,
        on: false
      };
    });
  };

  handleNewGoalSubmit = event => {
    event.preventDefault();
    this.setState(currentState => {
      const newGoal = {
        goal: currentState.newGoalValue,
        reason: currentState.newGoalReasonValue
      };
      const newGoalsList = [...currentState.goals, newGoal];
      return {
        goals: newGoalsList,
        addGoal: false,
        newGoalValue: "",
        newGoalReasonValue: ""
      };
    });
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
