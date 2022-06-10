import React, { useState } from "react";
import TabDash from "./TabDash";
import { Paper } from "@mui/material";
import TreeViewDash from "./TreeViewDash";
const Details = () => {
  const [dataId, setDataId] = useState();
  const updateTab = (e) => {
    console.log(e);
    setDataId(e);
  };
  return (
    <>
      <Paper
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
          height: "73vh",
        }}
      >
        <div style={{ display: "flex", flexGrow: 500 }}>
          <Paper style={{ width: "100%" }}>
            <TreeViewDash updateTab={updateTab} />
          </Paper>
        </div>
        <div style={{ display: "flex", flexGrow: 3 }}>
          <Paper style={{ width: "100%" }}>
            <TabDash dataId={dataId} />
          </Paper>
        </div>
      </Paper>
    </>
  );
};

export default Details;
