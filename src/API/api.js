// https://yrglset.herokuapp.com/api/goals/2020

import axios from "axios";

export const fetchGoalsByYear = year => {
  console.log("in fetch", year);

  return axios
    .get("https://yrglset.herokuapp.com/api/goals/" + year)
    .then(({ data: { goals } }) => {
      return goals;
    });
};

export const addNewGoal = (newGoal, year) => {
  console.log("in addNewGoal", newGoal);
  return axios
    .post(`https://yrglset.herokuapp.com/api/goals/${year}`, newGoal)
    .then(({ data: { newGoal } }) => {
      return newGoal;
    });
};

export const removeItem = entry => {
  console.log("in api rmeove", entry);
  return axios
    .delete(`https://yrglset.herokuapp.com/api/goals/${entry.year}`, {
      data: { goal_id: entry.goal_id }
    })
    .then(result => {
      return result;
    });
};
export const completeGoal = (completedGoal, thoughts, year) => {
  return axios
    .patch(`https://yrglset.herokuapp.com/api/goals/${year}`, {
      goal_id: completedGoal.goal_id,
      thoughts: thoughts
    })
    .then(({ data: { completedGoals } }) => {
      return completedGoals;
    });
};
