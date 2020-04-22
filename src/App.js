import React, { Component } from "react";
import Header from "./components/Header";
import LoginBox from "./components/LoginBox";
import { Router } from "@reach/router";
import NewUser from "./components/NewUser";
import NewHome from "./NewHome";

class App extends Component {
  state = { login: false, year: "" };
  render() {
    return (
      <div className="page">
        <Header login={this.state.login} toggleLogin={this.toggleLogin} />
        {this.state.login && (
          <LoginBox login={this.state.login} toggleLogin={this.toggleLogin} />
        )}
        <Router>
          <NewHome path="/" />
          <NewUser path="newUser" />
        </Router>
      </div>
    );
  }
  toggleLogin = () => {
    this.setState((currentState) => {
      return {
        login: !currentState.login,
      };
    });
  };
}

export default App;

// import React, { Component } from "react";
// import Header from "./components/Header";
// import Year from "./components/Year";
// import Goals from "./components/Goals";
// import CompletedGoals from "./components/CompletedGoals";
// import HeaderComplete from "./components/HeaderComplete";
// import * as api from "./API/api";
// import LoginBox from "./components/LoginBox";
// import { Router } from "@reach/router";

// class App extends Component {
//   state = {
//     year: "",
//     value: "",
//     on: false,
//     index: "",
//     goals: null,
//     login: false,
//   };
//   render() {
//     return this.state.goals === null ? (
//       <p>loading</p>
//     ) : (
//       <div className="page">
//         <Header login={this.state.login} toggleLogin={this.toggleLogin} />
//         {this.state.login && <LoginBox />}
//         <div className="mainBody">
//           <Year year={this.state.year} changeYear={this.changeYear} />
//           <Goals
//             updateGoalsNewGoal={this.updateGoalsNewGoal}
//             updateGoalsDeletedGoal={this.updateGoalsDeletedGoal}
//             updateGoalsCompletedGoal={this.updateGoalsCompletedGoal}
//             year={this.state.year}
//             apiGoals={this.state.goals}
//             handleSubmitUpdateCompleted={this.handleSubmitUpdateCompleted}
//           />
//           <HeaderComplete year={this.state.year} />
//           <CompletedGoals
//             apiGoals={this.state.goals}
//             removeCompletedItem={this.removeCompletedItem}
//           />
//         </div>
//       </div>
//     );
//   }

//   removeCompletedItem = (entry) => {
//     api.removeItem(entry).then(this.updateGoalsDeletedGoal(entry));
//   };

//   componentDidMount() {
//     const date = new Date();
//     const year = date.getFullYear();
//     api.fetchGoalsByYear(year).then((goals) => {
//       this.setState({ goals, year });
//     });
//   }

//   changeYear = (increment) => {
//     let year = this.state.year;
//     const newYear = (year += increment);
//     api
//       .fetchGoalsByYear(newYear)
//       .then((goals) => this.setState({ goals, year: newYear }));
//   };

//   updateGoalsNewGoal = (newGoal) => {
//     this.setState((currentState) => {
//       return { goals: [...currentState.goals, newGoal] };
//     });
//   };
//   updateGoalsDeletedGoal = (goalToDelete) => {
//     this.setState((currentState) => {
//       const goalsNow = [...currentState.goals];
//       const filteredGoals = goalsNow.filter(
//         (goal) => goal.goal_id !== goalToDelete.goal_id
//       );
//       return { goals: filteredGoals };
//     });
//   };
//   updateGoalsCompletedGoal = (completedGoal) => {
//     console.log(completedGoal, "UPDATE COMPLETD");
//     this.setState((currentState) => {
//       const updatedGoals = currentState.goals.map((goal) => {
//         if (completedGoal.goal_id === goal.goal_id) {
//           return completedGoal;
//         } else {
//           return goal;
//         }
//       });
//       return { goals: updatedGoals, value: "", on: false };
//     });
//     // this.setState(currentState => {
//     //   };
//     // });
//   };
//   toggleLogin = () => {
//     this.setState((currentState) => {
//       return {
//         login: !currentState.login,
//       };
//     });
//   };
// }

// export default App;

// // FURTHER FUNCTIONALITY IF SERVER-BASED -> STORE PREVIOUS YEARS AND THEN NAVIGATE BETWEEN THEM WITH ARROW BUTTONS EITHER SIDE OF THE YEAR AT THE TOP
// // VIEW DELETED GOALS
// // CLICK ON TASK TO GO TO TASK PAGE WITH NOTES AND ANY OTHER INFO ABOUT IT
