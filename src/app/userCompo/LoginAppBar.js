import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Login from "../elementsApp/login/Login";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../elementsApp/Fe/Home";
import Contact from "../elementsApp/Fe/Contact";
import About from "../elementsApp/Fe/About";

export default function ButtonAppBar({ setLoginTrueApp }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Buy Fresh Fruit
          </Typography>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button color="inherit" style={{ color: "white" }}>
              Home
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <Button color="inherit" style={{ color: "white" }}>
              About
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <Button color="inherit" style={{ color: "white" }}>
              Contact
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button color="inherit" style={{ color: "white" }}>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/sign">
          <Login setLoginTrueApp={setLoginTrueApp} />
        </Route>
        <Route path="/login">
          <Login setLoginTrueApp={setLoginTrueApp} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Box>
  );
}
