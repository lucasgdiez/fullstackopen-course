import React from "react";

const Statistic = ({ text, value, percentage }) => {
  return (
    <li>
      <p>{text}</p>
      <span>{value > 0 && percentage === true ? value + " %" : value}</span>
    </li>
  );
};

export default Statistic;
