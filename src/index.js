import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyInfo from "./components/myInfo.js"
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function MyApp() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   if (hours < 12) {
//     timeOfDay = "Morning"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//   } else {
//     timeOfDay = "night"
//   }
//   return (
//     <h1> Good {timeOfDay}!</h1>
//   )
// }


ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
