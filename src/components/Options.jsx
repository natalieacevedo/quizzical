import React, { useState } from "react";
import Questions from "./Questions";

function Options({ restart }) {
  const [userOptions, setUserOptions] = useState({
    category: "Any Category",
    difficulty: "Any Difficulty",
  });

  const [getQuestions, setGetQuestions] = useState(false);

  function getUserInput(event) {
    const { value, id } = event.target;

    setUserOptions((prevData) => {
      let difficultyLevel = id === "difficulty" ? value : "Any Difficulty";
      let categorySelected = id === "category" ? value : "Any Category";

      return {
        ...prevData,
        category:
          categorySelected === "Any Category"
            ? prevData["category"]
            : categorySelected,
        difficulty:
          difficultyLevel === "Any Difficulty"
            ? prevData["difficulty"]
            : difficultyLevel,
      };
    });
  }

  if (!getQuestions) {
    return (
      <section className="choices" onChange={getUserInput}>
        <label className="firstLabel" htmlFor="Category">
          Select a Category
        </label>
        <select name="Category" id="category">
          <option value="">Choose an option</option>
          <option value="Any Category">Any Category</option>
          <option value="27">Animals</option>
          <option value="31"> Anime and Manga </option>
          <option value="25">Art</option>
          <option value="10">Books</option>
          <option value="26">Celebrities</option>
          <option value="29">Comics</option>
          <option value="18">Computers</option>
          <option value="30"> Gadgets</option>
          <option value="9">General Knowledge</option>
          <option value="11">Film</option>
          <option value="23">History</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="12">Music</option>
          <option value="17">Science and Nature</option>
          <option value="28"> Vehicles</option>
          <option value="15">Video Games</option>
        </select>

        <label className="secondLabel" htmlFor="difficulty">
          Select Difficulty
        </label>
        <select name="difficulty" id="difficulty">
          <option value="">Choose Difficulty</option>
          <option value="Any Difficulty">Any Difficulty</option>
          <option name="easy" value="easy">
            Easy
          </option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button onClick={() => setGetQuestions(!getQuestions)}>
          See questions
        </button>
      </section>
    );
  } else {
    return <Questions options={userOptions} restart={restart} />;
  }
}

export default Options;
