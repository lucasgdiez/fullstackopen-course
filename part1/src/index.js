import React, { useState } from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import Button from "./components/Button";

const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });
  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 });

  return (
    <>
      <div>
        <p>The left: {clicks.left}</p>
        <Button onClick={() => handleLeftClick()} text='left' />
        <p>The right: {clicks.right}</p>
        <Button onClick={() => handleRightClick()} text='right' />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
