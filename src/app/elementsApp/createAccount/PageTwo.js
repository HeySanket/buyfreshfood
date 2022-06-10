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
const PageTwo = ({ formDAta, setFormData }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.marginTop}`}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              onChange={(event) => {
                setFormData({ ...formDAta, mobile: event.target.value });
              }}
              name="mobile"
              value={formDAta.mobile}
              label="mobile"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              onChange={(event) => {
                setFormData({ ...formDAta, email: event.target.value });
              }}
              name="email"
              value={formDAta.email}
              label="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              onChange={(event) => {
                setFormData({ ...formDAta, shopImg: event.target.value });
              }}
              name="shopImg"
              value={formDAta.shopImg}
              label="shop Img Link"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PageTwo;
