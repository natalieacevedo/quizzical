import axios from "axios";
import React, { useEffect, useState } from "react";
import Questions from "./Questions";

function Options() {
  return (
    <form className="allQuestions">
      <fieldset>
        <legend>Select a category</legend>
        <input type="radio" id="Any Category" />
        <label htmlFor="Any Category">Any Category</label>
        <br />
        <input type="radio" id="General Knowledge" />
        <label htmlFor="General Knowledge">General Knowledge</label>
        <br />
        <input type="radio" id="Celebrities" />
        <label htmlFor="Celebrities">Celebrities</label>
        <br />

        <input type="radio" id="Books" />
        <label htmlFor="Books">Books</label>

        <br />
        <input type="radio" id="Art" />
        <label htmlFor="Art">Art</label>
        <br />
        <input type="radio" id="History" />
        <label htmlFor="History">History</label>
        <br />
        <input type="radio" id="Computers" />
        <label htmlFor="Computers">Computers</label>
        <br />
        <input type="radio" id="Mythology" />
        <label htmlFor="Mythology">Mythology</label>
        <br />

        <input type="radio" id="Film" />
        <label htmlFor="Film">Film</label>
        <br />
        <input type="radio" id="Music" />
        <label htmlFor="Music">Music</label>
        <br />
        <input type="radio" id="Video Games" />
        <label htmlFor="Video Games">Video Games</label>
        <br />
        <input type="radio" id="Science and Nature" />
        <label htmlFor="Science and Nature">Science and Nature</label>
        <br />
        <input type="radio" id="Anime and Manga" />
        <label htmlFor="Anime and Manga">Anime and Manga</label>
        <br />
        <input type="radio" id="Animals" />
        <label htmlFor="Animals">Animals</label>
        <br />
        <input type="radio" id="Mathematics" />
        <label htmlFor="Mathematics">Mathematics</label>
        <br />
        <input type="radio" id="Vehicles" />
        <label htmlFor="Vehicles">Vehicles</label>
        <br />
        <input type="radio" id="Comics" />
        <label htmlFor="Comics">Comics</label>
        <br />
        <input type="radio" id="Gadgets" />
        <label htmlFor="Gadgets">Gadgets</label>
        <br />
      </fieldset>
      <fieldset>
        <legend>Select difficulty</legend>
        <input type="radio" id="Any difficulty" />
        <label htmlFor="Any difficulty">Any difficulty</label>
        <br />
        <input type="radio" id="Easy" />
        <label htmlFor="Easy">Easy</label>
        <br />
        <input type="radio" id="Medium" />
        <label htmlFor="Medium">Medium</label>
        <br />
        <input type="radio" id="Hard" />
        <label htmlFor="Hard">Hard</label>
        <br />
      </fieldset>
    </form>
  );
}

export default Options;
