import "./source.scss";
import Start from "./components/StartPage";
import Options from "./components/Options";
import React, { useState } from "react";

function App() {
  const [displayQuestions, setDisplayQuestions] = useState(false);
  let displayComponent;

  function selectChoices() {
    setDisplayQuestions(!displayQuestions);
  }

  if (!displayQuestions) {
    displayComponent = (
      <div className="introduction">
        <Start />
        <button className="startGame" onClick={selectChoices}>
          Start
        </button>
      </div>
    );
  } else {
    displayComponent = <Options restart={selectChoices} />;
  }

  return <>{displayComponent}</>;
}

export default App;
