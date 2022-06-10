import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Button } from "@mui/material";
import ViewPopUp from "./ViewPopUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const ShopList = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [shopData, setShopData] = useState({});

  const columns = [
    {
      name: "firstName",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastName",
      label: "Last",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "mobile",
      label: "mobile",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "email",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "shopAge",
      label: "shopAge",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "profit_In_A_Day",
      label: "profit_In_A_Day",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "shopName",
      label: "shopName",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div>
              <RemoveRedEyeIcon
                style={{ cursor: "pointer" }}
                onClick={() => viewShop(data[dataIndex])}
              />
            </div>
          );
        },
      },
    },
  ];

  const viewShop = (value) => {
    setOpen(true);
    setShopData(value);
    console.log(value.firstName);
  };
  useEffect(() => {
    var pdfShopList = JSON.parse(localStorage.getItem("pdfShopList"));
    if (pdfShopList == undefined) {
      setData([]);
    } else {
      setData(pdfShopList);
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <MUIDataTable title={"Shope List"} data={data} columns={columns} />
      </ThemeProvider>

      <ViewPopUp open={open} setOpen={setOpen} shopData={shopData} />
    </>
  );
};

export default ShopList;
