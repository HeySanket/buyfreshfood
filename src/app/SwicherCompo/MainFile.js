import React, { useEffect, useState } from "react";
import Navbar from "../userCompo/Navbar";
import ButtonAppBar from "../userCompo/LoginAppBar";
import { useLocation } from "react-router-dom";
const MainFile = ({ loginTrueApp, setLoginTrueApp }) => {
  // const [loginTrue, setLoginTrue] = useState(false);
  const Location = useLocation();
  return (
    <>
      {loginTrueApp ? (
        <Navbar setLoginTrueApp={setLoginTrueApp} />
      ) : (
        <ButtonAppBar setLoginTrueApp={setLoginTrueApp} />
      )}
    </>
  );
};

export default MainFile;
