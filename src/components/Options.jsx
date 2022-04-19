import axios from "axios";
import React, { useEffect, useState } from "react";
import Questions from "./Questions";

function Options() {
  const [userOptions, setUserOptions] = useState({
    category: "https://opentdb.com/api.php?amount=10",
    difficulty: "",
  });

  function getUserInput(event) {
    const { value, id } = event.target;
    //console.log(value, id);

    setUserOptions((prevData) => {
      let difficultyLevel = id === "difficulty" ? value : "";
      let categorySelected = id === "category" ? value : "";

      return {
        ...prevData,
        category:
          categorySelected === "" ? prevData["category"] : categorySelected,
        difficulty:
          difficultyLevel === "" ? prevData["difficulty"] : difficultyLevel,
      };
    });
  }
  console.log(userOptions);

  return (
    <section onChange={getUserInput}>
      <label htmlFor="Category">Select a Category</label>
      <select name="Category" id="category">
        <option value="">Please choose an option</option>
        <option value="Any Category">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="26">Celebrities</option>
        <option value="10">Books</option>
        <option value="25">Art</option>
        <option value="23">History</option>
        <option value="18">Computers</option>
        <option value="20">Mythology</option>
        <option value="11">Film</option>
        <option value="12">Music</option>
        <option value="15">Video Games</option>
        <option value="17">Science and Nature</option>
        <option value="31"> Anime and Manga </option>
        <option value="27">Animals</option>
        <option value="19">Mathematics</option>
        <option value="28"> Vehicles</option>
        <option value="29">Comics</option>
        <option value="30"> Gadgets</option>
      </select>

      <label htmlFor="difficulty">Select Difficulty</label>
      <select name="difficulty" id="difficulty">
        <option value="">Choose Difficulty</option>
        <option value="Any Difficulty">Any Difficulty</option>
        <option name="easy" value="easy">
          Easy
        </option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </section>
  );
}

export default Options;
