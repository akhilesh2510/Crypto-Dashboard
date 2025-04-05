import React from "react";
import Chart from "react-google-charts";
import { useState, useEffect } from "react";
export const options = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};
const CandleStickChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) =>
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ])
      );

      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="CandlestickChart"
      data={data}
      height="100%"
      options={options}
      legendToggle
    />
  );
};

export default CandleStickChart;
