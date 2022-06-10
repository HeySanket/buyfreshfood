import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Button } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { increment } from "../../reduxApp/slices/updateBuy";
const TablaList = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const columns = [
    {
      name: "vegetables",
      label: "Vegetables",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "fruits",
      label: "Fruits",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "fresh",
      label: "Fresh",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "validity",
      label: "Validity",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "",
      label: "Actions",
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite(value) {
          return (
            <Delete
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => removeItem(value)}
            />
          );
        },
      },
    },
  ];

  const removeItem = (value) => {
    console.log(value, "removeItem");
    var BuyList = JSON.parse(localStorage.getItem("Buy"));
    console.log(BuyList, "removeItem");
    BuyList.splice(value, 1);
    setData(BuyList);
    localStorage.setItem("Buy", JSON.stringify(BuyList));
    console.log(BuyList, "removeItem");
    dispatch(increment());
  };
  useEffect(() => {
    var BuyList = JSON.parse(localStorage.getItem("Buy"));
    if (BuyList != null) {
      setData(BuyList);
    }
  }, []);
  return (
    <div style={{ marginTop: "10px" }}>
      <ThemeProvider theme={theme}>
        <MUIDataTable
          title={"Buy Product List"}
          data={data && data}
          columns={columns}
        />
      </ThemeProvider>
    </div>
  );
};

export default TablaList;
