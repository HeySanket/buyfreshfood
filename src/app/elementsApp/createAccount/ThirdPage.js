import React from "react";
import { Button, TextField } from "@mui/material";
import { Card, CardContent, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
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
const ThirdPage = ({ formDAta, setFormData }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.marginTop}`}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              onChange={(event) => {
                setFormData({ ...formDAta, shopName: event.target.value });
              }}
              name="shopName"
              value={formDAta.shopName}
              label="shopName"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              onChange={(event) => {
                setFormData({ ...formDAta, city: event.target.value });
              }}
              name="city"
              value={formDAta.city}
              label="city"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <TextField
              fullWidth
              onChange={(event) => {
                setFormData({
                  ...formDAta,
                  profit_In_A_Day: event.target.value,
                });
              }}
              name="profit_In_A_Day"
              value={formDAta.profit_In_A_Day}
              label="profit_In_A_Day"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default ThirdPage;
