import React, { useState, useEffect } from "react";

function Questions() {
  // function getData() {
  //   axios
  //     .get("https://opentdb.com/api.php?amount=10")
  //     .then((response) => response.data)
  //     .then((data) => setAllQuestions(data.results));
  // }

  // useEffect(getData, []);

  return (
    <div className="questionsContainer">
      <h2>Here are all the questions</h2>
    </div>
  );
}

export default Questions;
