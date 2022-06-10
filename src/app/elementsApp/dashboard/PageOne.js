import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid, TextField } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    marginTop: theme.spacing(0),
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
const PageOne = ({ dataId }) => {
  console.log(dataId);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <div className={`${classes.marginTop}`}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="name"
                    value={dataId && dataId.firstName}
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    name="name"
                    value={dataId && dataId.lastName}
                    label="Last Name"
                    variant="outlined"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="name"
                    value={dataId && dataId.mobile}
                    label="Mobile"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="name"
                    value={dataId && dataId.profit_In_A_Day}
                    label="Profit_In_A_Day"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="name"
                    value={dataId && dataId.shopAge}
                    label="Shop Age"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="name"
                    value={dataId && dataId.shopImg}
                    label="Shop Img"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="name"
                    value={dataId && dataId.shopName}
                    label="Shop Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="name"
                    value={dataId && dataId.city}
                    label="City"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PageOne;
