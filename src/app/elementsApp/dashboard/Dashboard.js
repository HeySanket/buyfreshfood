import { Button } from "@mui/material";
import React from "react";
import ShopList from "./ShopList";
import {
  Switch,
  useRouteMatch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Details from "./Details";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const Location = useLocation();

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Link to={`${url}/details`} style={{ textDecoration: "none" }}>
          <Button
            style={{ margin: " 0 10px 0 0" }}
            type="submit"
            variant="contained"
          >
            details
          </Button>
        </Link>
        <Link to={`${url}/shopList`} style={{ textDecoration: "none" }}>
          <Button type="submit" variant="contained">
            shop List
          </Button>
        </Link>

        {Location.pathname == "/dashboard" ? (
          <div>
            <h1 style={{ textAlign: "center", marginTop: "150px" }}>
              Here You Can Find All <br></br>Things Which Needs You In Your
              Kitchen
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
      <Switch>
        <Route path={`${path}/shopList`}>
          <ShopList />
        </Route>
        <Route path={`${path}/details`}>
          <Details />
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
