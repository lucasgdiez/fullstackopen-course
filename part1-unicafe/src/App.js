import React, { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";
import "./App.css";

const titleString = "Give Feedback";

const goodType = "GOOD";
const neutralType = "NEUTRAL";
const badType = "BAD";

function App() {
  const [history, setHistory] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0
  });

  const handleButton = (property) => {
    switch (property) {
      case goodType:
        setHistory({ ...history, Good: history.Good + 1 });
        break;
      case neutralType:
        setHistory({ ...history, Neutral: history.Neutral + 1 });
        break;
      case badType:
        setHistory({ ...history, Bad: history.Bad + 1 });
        break;
    }
  };

  return (
    <div className='App'>
      <h1>{titleString}</h1>

      <Button text='Good' onClick={() => handleButton(goodType)} />
      <Button text='Neutral' onClick={() => handleButton(neutralType)} />
      <Button text='Bad' onClick={() => handleButton(badType)} />

      <Statistics allValues={history} />
    </div>
  );
}

export default App;
