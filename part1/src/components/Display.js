import React from "react";

const Display = ({ text, counter }) => {
  return (
    <div>
      <h1>
        {text} {counter}
      </h1>
    </div>
  );
};

export default Display;
