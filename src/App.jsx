import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export const App = () => {
  //Use a useState for handler the quote's value and it's setter
  const [quote, setquote] = useState("");

  //Use a get function of axios for make the request to the API of 'adviceslip'. This function return a promise so we have to handle it
  const fetch_quote = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      //With the then function, we handle the response, the desestructure the necessary value, that's the 'advice' property that contains the quote, and the set advice value to our state
      .then((response) => {
        const { advice } = response.data.slip;
        setquote(advice);
      })
      //In case of error, we hanlde it with the catch function and show the error on console
      .catch((err) => {
        console.log(err);
      });
  };

  //We return a simple component with a container div and a card with the quote and a button to execute the generation of a new quote
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{quote}</h1>
        <button className="button" onClick={fetch_quote}>
          <span>Generate quote</span>
        </button>
      </div>
    </div>
  );
};
