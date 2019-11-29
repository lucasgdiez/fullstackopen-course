import React from "react";
import Statistic from "./Statistic";

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

  return percentage;
};

//Refactor into single statistic passing props;

const History = ({ Good, Neutral, Bad }) => {
  return (
    <div>
      <ul style={{ padding: "0" }}>
        <Statistic text='Good' value={Good} />
        <Statistic text='Neutral' value={Neutral} />
        <Statistic text='Bad' value={Bad} />
      </ul>
      <ul style={{ padding: "0" }}>
        <Statistic text='All' value={totalSum(Good, Neutral, Bad)} />
        <Statistic text='Average' value={totalAverage(Good, Neutral, Bad)} />
        <Statistic
          text='Percentage'
          value={totalPercentage(Good, totalSum(Good, Neutral, Bad))}
          percentage={true}
        />
      </ul>
    </div>
  );
};

export default History;
