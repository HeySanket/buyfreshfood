import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../../reduxApp/slices/userSlice";
const ClientAccountList = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const userArr = useSelector(selectUser);
  const [data, setData] = useState([]);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "last",
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
      name: "password",
      label: "password",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];
  useEffect(() => {
    var vegetablesList = JSON.parse(localStorage.getItem("loginClient"));
    if (vegetablesList == undefined) {
      setData([]);
    } else {
      setData(vegetablesList);
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <MUIDataTable
          title={"Client Account List"}
          data={data}
          columns={columns}
        />
      </ThemeProvider>
    </>
  );
};

export default ClientAccountList;
