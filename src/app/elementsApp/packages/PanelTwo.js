import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import EditDialog from "./EditDialog";

const PanelTwo = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [editValue, setEditValue] = React.useState({});
  useEffect(() => {
    var vegetablesList = JSON.parse(localStorage.getItem("vegetablesList"));
    setData(vegetablesList);
  }, []);

  const handleAdd = (value) => {
    var allConfirmVegList = JSON.parse(
      localStorage.getItem("vegetablesConfirmList")
    );
    if (!Array.isArray(allConfirmVegList)) allConfirmVegList = [];
    allConfirmVegList.push(value);
    localStorage.setItem(
      "vegetablesConfirmList",
      JSON.stringify(allConfirmVegList)
    );
  };
  const handleEdit = (value) => {
    setEditValue(value);
    // console.log(value, "alala");
    setOpen(true);
  };
  const updateState = (value) => {
    console.log(value);
    setData(value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <EditDialog
        updateState={updateState}
        editValue={editValue}
        open={open}
        setOpen={setOpen}
      />
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
                    fullWidth
                    onClick={() => {
                      handleAdd(value);
                    }}
                    type="submit"
                    variant="contained"
                    style={{ marginRight: "5px" }}
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => {
                      handleEdit(value);
                    }}
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PanelTwo;
