import React, { Suspense, useEffect, useState } from "react";
import MainFile from "./app/SwicherCompo/MainFile";
import { BrowserRouter, useHistory } from "react-router-dom";
function App() {
  const [loginTrueApp, setLoginTrueApp] = useState(false);
  const History = useHistory();
  useEffect(() => {
    var mainLogin = JSON.parse(localStorage.getItem("loginUserToken"));
    if (mainLogin) {
      setLoginTrueApp(true);
    }
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <MainFile
            loginTrueApp={loginTrueApp}
            setLoginTrueApp={setLoginTrueApp}
          />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
