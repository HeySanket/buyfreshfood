import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addUser } from "../../reduxApp/slices/userSlice";
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
const AddClientForm = () => {
  const [userName, setUserName] = useState({
    name: "",
    last: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    name: false,
    last: false,
    mobile: false,
    email: false,
    password: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    last: "",
    mobile: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserName({ ...userName, [name]: value });
    userValidate(name, value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    if (
      userName.name != "" &&
      userName.last != "" &&
      userName.mobile != "" &&
      userName.password != ""
    ) {
      dispatch(addUser(userName));

      var clientConfirm = JSON.parse(localStorage.getItem("loginClient"));
      if (!Array.isArray(clientConfirm)) clientConfirm = [];
      clientConfirm.push(userName);
      localStorage.setItem("loginClient", JSON.stringify(clientConfirm));
      Swal.fire("Success", "You Have Created Client", "success");
      setUserName({
        name: "",
        last: "",
        mobile: "",
        email: "",
        password: "",
      });
      console.log("hello sanket");
    } else {
      Swal.fire("Fill Data", "Please Fill Data", "error");
    }
  };

  const setValidationState = (name, status, message) => {
    setValidate({ ...validate, [name]: status });
    setErrorMsg({ ...errorMsg, [name]: message });
  };
  const userValidate = (name, value) => {
    switch (name) {
      case "name":
      case "last": {
        var numbers = /^[0-9]+$/;
        if (value.length < 2) {
          setValidationState(name, true, "More then 2 characters");
        } else if (!isNaN(value)) {
          setValidationState(name, true, "Number Not Allowed");
        } else {
          setValidationState(name, false, "");
        }
        break;
      } //firstName__lastName
      case "email": {
        if (
          !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        ) {
          setValidationState(name, true, "Invalid Email Address");
        } else {
          setValidationState(name, false, "");
        }
        break;
      } //email
      case "mobile": {
        if (!/[0-9]{10}/.test(value)) {
          setValidationState(name, true, "Write Mobile Number Here");
        } else if (value.length != 10) {
          setValidationState(name, true, "Write 10 digit Mobile Number Here");
        } else {
          setValidationState(name, false, "");
        }
        break;
      } //mobile
    }
  };
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <div className={`${classes.marginTop}`}>
            <form onSubmit={handelSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="name"
                    value={userName.name}
                    label="name"
                    variant="outlined"
                    error={validate.name}
                    helperText={errorMsg.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="last"
                    value={userName.last}
                    label="last"
                    variant="outlined"
                    error={validate.last}
                    helperText={errorMsg.last}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="mobile"
                    value={userName.mobile}
                    label="mobile"
                    variant="outlined"
                    error={validate.mobile}
                    helperText={errorMsg.mobile}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="email"
                    value={userName.email}
                    label="email"
                    variant="outlined"
                    error={validate.email}
                    helperText={errorMsg.email}
                  />{" "}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    value={userName.password}
                    label="password"
                    variant="outlined"
                    error={validate.password}
                    helperText={errorMsg.password}
                  />
                </Grid>
              </Grid>
              <Grid style={{ marginTop: 10 }} item xs={12} sm={12}>
                <Button fullWidth type="submit" variant="contained">
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

export default AddClientForm;
