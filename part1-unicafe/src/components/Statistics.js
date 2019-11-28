import React from "react";
import History from "./History";

const Statistics = ({ allValues }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <History {...allValues} />
    </div>
  );
};

export default Statistics;
