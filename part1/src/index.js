import React, { useState } from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import Button from "./components/Button";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const handleSum = () => {
    setCounter(counter + 1);
  };

  const handleSbstrc = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const setToValue = (value) => () => {
    setCounter(value);
  };

  return (
    <>
      <Display counter={counter} />
      <Button onClick={setToValue(counter + 1)} text='+' />
      <Button onClick={setToValue(counter - 1)} text='-' />
      <Button onClick={setToValue(0)} text='reset' />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
