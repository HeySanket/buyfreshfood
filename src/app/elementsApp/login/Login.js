import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import {
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import Footer from "../Fe/Footer";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Buy Fresh Fruit
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    marginTop: theme.spacing(17),
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
const Login = ({ setLoginTrueApp }) => {
  const [userName, setUserName] = useState({
    email: "",
    password: "",
    name: "",
    last: "",
    mobile: "",
  });
  const location = useLocation();
  const [data, setData] = useState([]);
  const classes = useStyles();
  let history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserName({ ...userName, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userName, "userName");
    if (location.pathname == "/sign") {
      console.log(userName.email.length, "  userName.email");
      if (
        userName.email.length == 0 &&
        userName.password == 0 &&
        userName.name == 0 &&
        userName.last == 0 &&
        userName.mobile == 0
      ) {
        Swal.fire("Please Fill From", "Create Account", "error");
      } else {
        var mainLogin = JSON.parse(localStorage.getItem("loginClient"));
        if (!Array.isArray(mainLogin)) mainLogin = [];
        mainLogin.push(userName);
        localStorage.setItem("loginClient", JSON.stringify(mainLogin));
        localStorage.setItem("viewProfile", JSON.stringify(userName));
        const loginUserToken = new Date().toISOString();
        localStorage.setItem("loginUserToken", JSON.stringify(loginUserToken));
        setLoginTrueApp(true);
        history.push("/dashboard");
      }
    } else {
      var sign = JSON.parse(localStorage.getItem("loginClient"));
      setData(sign);
      console.log(sign, "dd");
      if (sign == null) {
        Swal.fire("Incorrect Information", "Create Account", "error");
      }
      if (sign != null) {
        for (var value of sign) {
          if (
            value.email == userName.email &&
            value.password == userName.password
          ) {
            localStorage.setItem("viewProfile", JSON.stringify(value));
            const loginUserToken = new Date().toISOString();
            localStorage.setItem(
              "loginUserToken",
              JSON.stringify(loginUserToken)
            );
            console.log("go");

            var mainLogin = JSON.parse(localStorage.getItem("loginUserToken"));
            if (mainLogin) {
              setLoginTrueApp(true);
              history.push("/dashboard");
            }
          }
          // else {
          //   // alert("create Account");
          //   Swal.fire("Create Account", "Sign For Create Account", "error");
          // }
        }
      }
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className={`${classes.paper} ${classes.marginTop}`}>
              <Typography
                component="h1"
                variant="h5"
                style={{ marginBottom: "10px" }}
              >
                GO TO APP
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Link to="/login">
                    <Button variant="contained" fullWidth color="inherit">
                      login
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Link to="/sign">
                    <Button variant="contained" fullWidth color="inherit">
                      sign
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              <form className={classes.form} onSubmit={handelSubmit}>
                <Grid container spacing={2}>
                  {location.pathname == "/sign" ? (
                    <>
                      {" "}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          name="name"
                          value={userName.name}
                          label="name"
                          variant="outlined"
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          onChange={handleChange}
                          name="last"
                          value={userName.last}
                          label="last"
                          variant="outlined"
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={12}>
                        <TextField
                          fullWidth
                          onChange={handleChange}
                          name="mobile"
                          value={userName.mobile}
                          label="mobile"
                          variant="outlined"
                        />
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleChange}
                      name="email"
                      value={userName.email}
                      label="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleChange}
                      name="password"
                      value={userName.password}
                      label="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button fullWidth type="submit" variant="contained">
                      {location.pathname == "/login" ? "Login" : "sign"}
                    </Button>
                  </Grid>
                </Grid>

                <Grid container justify="flex-end"></Grid>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
