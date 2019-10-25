import React, { useState } from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import Button from "./components/Button";

const App = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <>
      <div>
        <p>The left: {left}</p>
        <Button onClick={() => setLeft(left + 1)} text='left' />
        <p>The right: {right}</p>
        <Button onClick={() => setRight(right + 1)} text='right' />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
