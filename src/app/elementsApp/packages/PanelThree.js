import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const PanelThree = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var vegetablesList = JSON.parse(
      localStorage.getItem("vegetablesConfirmList")
    );
    setData(vegetablesList);
  }, []);

  const confirmVeg = (value) => {
    var clientVeg = JSON.parse(localStorage.getItem("viewClientVeg"));
    if (!Array.isArray(clientVeg)) clientVeg = [];
    clientVeg.push(value);
    localStorage.setItem("viewClientVeg", JSON.stringify(clientVeg));
  };

  const removeVeg = (i) => {
    console.log(data, "not splice");
    console.log(i, "iiii");
    data.splice(i, 1);

    localStorage.removeItem("vegetablesConfirmList");
    setData(data);
    console.log(data, "splice");
    localStorage.setItem("vegetablesConfirmList", JSON.stringify(data));
    var clientVeg1 = JSON.parse(localStorage.getItem("vegetablesConfirmList"));
    setData(clientVeg1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {Array.isArray(data) &&
        data.map((value, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  width: "200px",
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <h4>{value.vegetables}</h4>
                <h4>{value.fruits}</h4>
                <h4>{value.price}</h4>
                <h4>{value.fresh}</h4>
                <h4>{value.validity}</h4>
                <div style={{ display: "flex" }}>
                  <Button
                    onClick={() => removeVeg(index)}
                    type="submit"
                    variant="contained"
                    color="error"
                    style={{ marginRight: "5px" }}
                  >
                    Remove
                  </Button>
                  <Button
                    onClick={() => confirmVeg(value)}
                    type="submit"
                    variant="contained"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PanelThree;
