import React, { useState } from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import Button from "./components/Button";
import History from "./components/History";

const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAll(allClicks.concat("L"));
  };
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    setAll(allClicks.concat("R"));
  };

  return (
    <>
      <div>
        <Display text='left' counter={clicks.left} />
        <Button onClick={() => handleLeftClick()} text='left' />
        <Display text='right' counter={clicks.right} />
        <Button onClick={() => handleRightClick()} text='right' />
        <History allClicks={allClicks} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
