import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid } from "@mui/material";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    marginTop: theme.spacing(9),
    minWidth: 440,
  },
  marginTop: {
    marginTop: "3px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  padding: {
    padding: "5px",
  },
}));
const AdminPackage = () => {
  const [packageData, setPackageData] = useState({
    bankName: "",
    accountNumber: "",
    amount: "",
    coupon_code: "",
    feedBack: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageData({ ...packageData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      packageData.bankName != "" &&
      packageData.accountNumber != "" &&
      packageData.amount != "" &&
      packageData.coupon_code != "" &&
      packageData.feedBack != ""
    ) {
      Swal.fire("Success", "Completed", "success");
      console.log(packageData);
      setPackageData({
        bankName: "",
        accountNumber: "",
        amount: "",
        coupon_code: "",
        feedBack: "",
      });
    } else {
      Swal.fire("Fill Data", "Please Fill Data", "error");
    }
  };
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <div className={`${classes.marginTop}`}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="bankName"
                    value={packageData.bankName}
                    label="Bank Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="accountNumber"
                    value={packageData.accountNumber}
                    label="Account Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="amount"
                    value={packageData.amount}
                    label="Amount"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="coupon_code"
                    value={packageData.coupon_code}
                    label="Coupon Code"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="feedBack"
                    value={packageData.feedBack}
                    label="FeedBack"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button fullWidth type="submit" variant="contained">
                    Pay Bill
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12}></Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminPackage;
