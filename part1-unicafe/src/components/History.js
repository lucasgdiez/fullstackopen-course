import React from "react";

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
    </div>
  );
};

export default History;
