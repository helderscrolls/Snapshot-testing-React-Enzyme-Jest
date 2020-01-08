import React from "react";
import "./App.css";

function ShowOtherAdviceButton(props) {
  return (
    <div className="App">
      <button className="Advice-other-advice-button" onClick={props.loadAdvice}>
        Show other advice
      </button>
    </div>
  );
}

export default ShowOtherAdviceButton;
