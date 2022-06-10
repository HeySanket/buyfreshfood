import React from "react";
import { Route, Switch } from "react-router-dom";
import MenuIconList from "../jsonFile/MenuIconList";

const SwitchData = () => {
  return (
    <>
      <Switch>
        {MenuIconList.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.path == "/" ? true : false}
          >
            {route.component}
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default SwitchData;
