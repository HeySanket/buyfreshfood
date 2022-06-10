import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid } from "@mui/material";
import Swal from "sweetalert2";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    marginTop: theme.spacing(4),
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
const Profile = () => {
  const [userName, setUserName] = useState({
    name: "",
    last: "",
    mobile: "",
    email: "",
    password: "",
  });
  const classes = useStyles();

  useEffect(() => {
    var viewProfile = JSON.parse(localStorage.getItem("viewProfile"));
    if (viewProfile) {
      setUserName(viewProfile);
    }
  }, []);
  return (
    <>
      <h2>Logged In User Welcome To Profile</h2>
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
                    value={userName.name}
                    label="Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="last"
                    value={userName.last}
                    label="Last"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="mobile"
                    value={userName.mobile}
                    label="Mobile"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="email"
                    value={userName.email}
                    label="Email"
                    variant="outlined"
                  />{" "}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    readOnly
                    autoComplete="off"
                    name="password"
                    value={userName.password}
                    label="Password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid style={{ marginTop: 10 }} item xs={12} sm={12}>
                <Button fullWidth disabled type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
