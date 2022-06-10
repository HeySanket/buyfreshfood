import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import FirstPage from "./FirstPage";
import ThirdPage from "./ThirdPage";
import PageTwo from "./PageTwo";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { createAccount } from "../../reduxApp/slices/createAccountSlice";
const CreateForm = () => {
  const [formDAta, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    shopAge: "",
    email: "",
    shopImg: "",
    shopName: "",
    city: "",
    profit_In_A_Day: "",
  });
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const formTitle = ["First Page", "Second Page", "Third Page"];
  const loadForm = () => {
    if (page == 0) {
      return <FirstPage formDAta={formDAta} setFormData={setFormData} />;
    } else if (page == 1) {
      return <PageTwo formDAta={formDAta} setFormData={setFormData} />;
    } else {
      return <ThirdPage formDAta={formDAta} setFormData={setFormData} />;
    }
  };
  const handleBack = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    if (page == formTitle.length - 1) {
      if (
        formDAta.firstName != "" &&
        formDAta.lastName != "" &&
        formDAta.mobile != "" &&
        formDAta.shopAge != "" &&
        formDAta.email != "" &&
        formDAta.shopImg != "" &&
        formDAta.city != "" &&
        formDAta.profit_In_A_Day != ""
      ) {
        var shopList = JSON.parse(localStorage.getItem("pdfShopList"));
        if (!Array.isArray(shopList)) shopList = [];
        shopList.push(formDAta);
        localStorage.setItem("pdfShopList", JSON.stringify(shopList));
        dispatch(createAccount(formDAta));
        Swal.fire("Success", "Please Fill Data", "success");
      } else {
        Swal.fire("Error", "Please Fill Data", "error");
      }
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <Card variant="outlined">
        <div style={{ textAlign: "center" }}>
          <h2>Add Shope To Sell Product</h2>
        </div>
        <CardContent>
          {loadForm()}
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                onClick={handleBack}
                disabled={page == 0}
                type="Back"
                variant="contained"
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                onClick={handleNext}
                type="submit"
                variant="contained"
              >
                {page == formTitle.length - 1 ? "Submit" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateForm;
