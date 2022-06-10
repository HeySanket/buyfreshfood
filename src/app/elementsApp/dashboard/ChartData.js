import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartData = () => {
  const [chartData, setChartData] = useState([]);
  const [showData, setShowData] = useState({
    OneDay: 0,
    twoDay: 0,
    threeDay: 0,
    fourDay: 0,
    freshYes: 0,
    freshNo: 0,
  });

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("viewClientVeg"));
    if (userMsgData != null && userMsgData.length != 0) {
      const One = userMsgData.map((value, i) => {
        return value.validity.slice(0, 1);
      });
      const One1 = userMsgData.map((value, i) => {
        return value.fresh;
      });

      console.log(One1, "One1");
      const OneDay = One.filter((value, i) => {
        return value == "1";
      });
      const twoDay = One.filter((value, i) => {
        return value == "2";
      });
      const threeDay = One.filter((value, i) => {
        return value == "3";
      });
      const fourDay = One.filter((value, i) => {
        return value == "4";
      });
      const freshYes = One1.filter((value, i) => {
        return value.toLowerCase() == "yes";
      });
      const freshNo = One1.filter((value, i) => {
        return value.toLowerCase() == "no";
      });
      // console.log(OneDay.length, "OneDay");
      // console.log(twoDay.length, "twoDay");
      // console.log(threeDay.length, "threeDay");
      // console.log(fourDay.length, "fourDay");
      // console.log(freshNo.length, "freshNo");
      setShowData({
        OneDay: OneDay.length,
        twoDay: twoDay.length,
        threeDay: threeDay.length,
        fourDay: fourDay.length,
        freshYes: freshYes.length,
        freshNo: freshNo.length,
      });
    }
  }, []);

  const data = {
    labels: [
      "One Day",
      "Two Day",
      "Three Day",
      "Four Day",
      "Fresh Yes",
      "Fresh No",
    ],
    datasets: [
      {
        // label: "# of votes",
        data: [
          showData.OneDay,
          showData.twoDay,
          showData.threeDay,
          showData.fourDay,
          showData.freshYes,
          showData.freshNo,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <Bar
        data={data}
        height={135}
        width={350}
        option={{ maintainAspectRatio: false }}
      />
    </>
  );
};

export default ChartData;
