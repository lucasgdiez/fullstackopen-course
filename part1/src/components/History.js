import React from "react";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing buttons</div>;
  }

  return <div>button history: {allClicks.join(" ")}</div>;
};

export default History;
