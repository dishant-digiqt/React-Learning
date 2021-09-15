import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
function MyInfo() {
  return (
    <div>
      <h1>Dishant Rathi</h1>
      <p>This is the Paragraph about me.....</p>
      <ul>
        <li>Thailand</li>
        <li>Japan</li>
        <li>NYC</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));

reportWebVitals();
