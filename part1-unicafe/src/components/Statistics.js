import React from "react";
import History from "./History";

const Statistics = ({ allValues }) => {
  const values = Object.values(allValues).map((val) => {
    return val;
  });

  return (
    <div>
      <h3>Statistics</h3>
      {values.reduce((prevVal, currentVal) => {
        return prevVal + currentVal;
      }) === 0 ? (
        "No Feedback Given."
      ) : (
        <History {...allValues} />
      )}
    </div>
  );
};

export default Statistics;
