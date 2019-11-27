import React from "react";

const totalAverage = (...props) => {
  const reducedValues = props.reduce((prevVal, currentValue) => {
    return (prevVal + currentValue) / props.length;
  }, 0);

  return reducedValues.toFixed(2);
};

const History = ({ allValues }) => {
  return (
    <div>
      <ul style={{ padding: "0" }}>
        <li style={{ listStyle: "none" }}>
          Good: {allValues.Good > 0 ? <span>{allValues.Good}</span> : "Empty."}
        </li>
        <li style={{ listStyle: "none" }}>
          Neutral: {allValues.Neutral > 0 ? <span>{allValues.Neutral}</span> : "Empty."}
        </li>
        <li style={{ listStyle: "none" }}>
          Bad: {allValues.Bad > 0 ? <span>{allValues.Bad}</span> : "Empty."}
        </li>
      </ul>
      <ul style={{ padding: "0" }}>
        <li style={{ listStyle: "none", fontWeight: 600 }}>
          All:{" "}
          {allValues.Good || allValues.Neutral || allValues.Bad > 0 ? (
            <span>{allValues.Good + allValues.Neutral + allValues.Bad}</span>
          ) : (
            "Empty."
          )}
        </li>
        <li style={{ listStyle: "none", fontWeight: 600 }}>
          Average:{" "}
          {allValues.Good || allValues.Neutral || allValues.Bad > 0 ? (
            <span>{totalAverage(allValues.Good, allValues.Neutral, allValues.Bad)}</span>
          ) : (
            "Empty."
          )}
        </li>
      </ul>
    </div>
  );
};

export default History;
