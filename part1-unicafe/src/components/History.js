import React from "react";

const totalSum = (...props) => {
  const sum = props.reduce((prevVal, currentValue) => {
    return prevVal + currentValue;
  });

  return sum;
};

const totalAverage = (...props) => {
  const reducedValues = props.reduce((prevVal, currentValue) => {
    return (prevVal + currentValue) / props.length;
  }, 0);

  return reducedValues.toFixed(2);
};

const totalPercentage = (value, total) => {
  const percentage = (value * 100) / total;

  return percentage + " %";
};

const History = ({ Good, Neutral, Bad }) => {
  return (
    <div>
      <ul style={{ padding: "0" }}>
        <li style={{ listStyle: "none" }}>Good: {Good > 0 ? <span>{Good}</span> : "Empty."}</li>
        <li style={{ listStyle: "none" }}>
          Neutral: {Neutral > 0 ? <span>{Neutral}</span> : "Empty."}
        </li>
        <li style={{ listStyle: "none" }}>Bad: {Bad > 0 ? <span>{Bad}</span> : "Empty."}</li>
      </ul>
      <ul style={{ padding: "0" }}>
        <li style={{ listStyle: "none", fontWeight: 600 }}>
          All: {Good || Neutral || Bad > 0 ? <span>{totalSum(Good, Neutral, Bad)}</span> : "Empty."}
        </li>
        <li style={{ listStyle: "none", fontWeight: 600 }}>
          Average:{" "}
          {Good || Neutral || Bad > 0 ? <span>{totalAverage(Good, Neutral, Bad)}</span> : "Empty."}
        </li>
        <li style={{ listStyle: "none", fontWeight: 600 }}>
          Percentage:{" "}
          {Good || Neutral || Bad > 0 ? (
            <span>{totalPercentage(Good, totalSum(Good, Neutral, Bad))}</span>
          ) : (
            "Empty."
          )}
        </li>
      </ul>
    </div>
  );
};

export default History;
