(this.webpackJsonpyearlist=this.webpackJsonpyearlist||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(8),s=t.n(o),r=(t(15),t(4)),c=t(1),u=t(2),m=t(5),i=t(3),h=t(6);var d=function(e){return n.a.createElement("header",null,n.a.createElement("h1",null,"YEARLY GOAL SETTER "),n.a.createElement("h1",null,"("),n.a.createElement("h1",{className:"yrglset"},"YRGLSET"),n.a.createElement("h1",null,")"))};var g=function(e){return n.a.createElement("div",{className:"year"},n.a.createElement("h2",null,e.year))},p=t(9);var E=function(e){return n.a.createElement("li",{className:"goalsTitle",key:"goalsTitle"},n.a.createElement("p",{className:"thingsIWannaDo"},"Things I wanna do"),n.a.createElement("p",{className:"butWhy"},"But Why?"),n.a.createElement("button",{className:"addGoalButton",onClick:e.toggleNewGoal},"add a goal"))};var G=function(e){return n.a.createElement(n.a.Fragment,null,e.addGoal&&n.a.createElement("form",{className:"newGoalContainer",onSubmit:e.handleNewGoalSubmit},n.a.createElement("label",null,"new goal: "),n.a.createElement("input",{type:"text",value:e.newGoalValue,onChange:e.handleGoalValueChange,className:"newGoalText",placeholder:"what is it?"}),n.a.createElement("input",{type:"text",value:e.newGoalReasonValue,onChange:e.handleGoalReasonsValueChange,className:"newGoalReasonText",placeholder:"any particular reason(s)?..."}),n.a.createElement("input",{className:"submit",type:"submit",value:"Submit"})))};var f=function(e){return n.a.createElement(n.a.Fragment,null,e.goals.map((function(a,t){return n.a.createElement("li",{key:"goal ".concat(t),className:t%2===0?"goalListItem2":"goalListItem1"},n.a.createElement("p",{className:"goal"},a.goal),n.a.createElement("p",{className:"reason"},a.reason),n.a.createElement("button",{onClick:function(){e.removeItem(t)},className:"btn"},"remove"),n.a.createElement("button",{className:"didItButton",onClick:function(){e.toggle(t)}},"I DID IT!!!"))})))};var v=function(e){return n.a.createElement(n.a.Fragment,null,e.on&&n.a.createElement("form",{className:"thoughtsContainer",onSubmit:e.handleSubmitUpdateGoals},n.a.createElement("label",null,"Thoughts?"),n.a.createElement("input",{type:"text",value:e.value,onChange:e.handleChange,className:"thoughts",placeholder:"How did it go?"}),n.a.createElement("input",{className:"submit",type:"submit",value:"Submit"})))},b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(n)))).state={goals:[{goal:"Visit Hullshshg",reason:"whales and stuff"},{goal:"learn to bake a cookie",reason:"so i have a go-to baked good"},{goal:"write up big trip",reason:"to reconnect"}],index:"",addGoal:!1,newGoalValue:"",newGoalReasonValue:"",value:""},t.handleSubmitUpdateGoals=function(e){e.preventDefault(),t.setState((function(e){var a=Object(p.a)({},e.goals[e.index]);return a.thoughts=e.value,t.props.handleSubmitUpdateCompleted(a),{goals:e.goals.filter((function(a,t){return t!==e.index?a:null})),value:"",on:!1}}))},t.toggle=function(e){t.setState({on:!t.state.on,index:e,addGoal:!1})},t.removeItem=function(e){t.setState((function(a){return{goals:a.goals.filter((function(a,t){return t!==e?a:null})),addGoal:!1,on:!1}}))},t.handleNewGoalSubmit=function(e){e.preventDefault(),t.setState((function(e){var a={goal:e.newGoalValue,reason:e.newGoalReasonValue};return{goals:[].concat(Object(r.a)(e.goals),[a]),addGoal:!1,newGoalValue:"",newGoalReasonValue:""}}))},t.handleGoalValueChange=function(e){t.setState({newGoalValue:e.target.value})},t.handleGoalReasonsValueChange=function(e){t.setState({newGoalReasonValue:e.target.value})},t.handleChange=function(e){t.setState({value:e.target.value})},t.toggleNewGoal=function(){t.setState({addGoal:!t.state.addGoal,on:!1})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"goalsList"},n.a.createElement(E,{toggleNewGoal:this.toggleNewGoal}),n.a.createElement(f,{goals:this.state.goals,removeItem:this.removeItem,toggle:this.toggle})),n.a.createElement(G,{addGoal:this.state.addGoal,newGoalValue:this.state.newGoalValue,handleNewGoalSubmit:this.handleNewGoalSubmit,handleGoalValueChange:this.handleGoalValueChange,newGoalReasonValue:this.state.newGoalReasonValue,handleGoalReasonsValueChange:this.handleGoalReasonsValueChange}),n.a.createElement(v,{on:this.state.on,handleSubmitUpdateGoals:this.handleSubmitUpdateGoals,value:this.state.value,handleChange:this.handleChange}))}}]),a}(l.Component);var N=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"completedGoalList"},n.a.createElement("li",{className:"completedGoalsTitles"},n.a.createElement("p",{className:"completedWhat"},"What"),n.a.createElement("p",{className:"completedWhy"},"Why "),n.a.createElement("p",{className:"completedThoughts"},"Thoughts once you did it")),e.completedGoals.map((function(a,t){return n.a.createElement("li",{className:"completedGoalItem",key:a.goal},n.a.createElement("p",{className:"completedWhat"},a.goal),n.a.createElement("p",{className:"completedWhy"},a.reason),n.a.createElement("p",{className:"completedThoughts"},a.thoughts),n.a.createElement("button",{onClick:function(){return e.removeCompletedItem(t)},className:"btnComplete"},n.a.createElement("i",{className:"fa fa-close"})))}))))};var w=function(e){return n.a.createElement("div",null,n.a.createElement("h3",{className:"year"},e.year,": complete"))},y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(n)))).state={year:2020,completedGoals:[{goal:"something",reason:"not sure",thoughts:"really regret it"}],value:"",on:!1,index:""},t.removeCompletedItem=function(e){t.setState((function(a){return console.log("YOYO IN HERE"),{completedGoals:a.completedGoals.filter((function(a,t){return t!==e?a:null}))}}))},t.handleSubmitUpdateCompleted=function(e){t.setState((function(a){var t=Object(r.a)(a.completedGoals);return t.unshift(e),{completedGoals:t}}))},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state.year;return n.a.createElement("div",{className:"page"},n.a.createElement(d,null),n.a.createElement(g,{year:e}),n.a.createElement(b,{handleSubmitUpdateCompleted:this.handleSubmitUpdateCompleted}),n.a.createElement(w,{year:e}),n.a.createElement(N,{completedGoals:this.state.completedGoals,removeCompletedItem:this.removeCompletedItem}))}}]),a}(l.Component);s.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0a29c2e5.chunk.js.map