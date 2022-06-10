import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../reduxApp/slices/updateBuy";
const VegList = () => {
  const [searchText, setSearchText] = useState({
    search: "",
  });

  const [notesData, setNotesData] = useState([]);
  const [notesDataLocal, setNotesDataLocal] = useState([]);
  const [sortedName, setSortedName] = useState([]);
  const dispatch = useDispatch();
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setSearchText({ ...searchText, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    var filterArray = notesDataLocal.filter((value, i) => {
      return value.vegetables == searchText.search;
    });
    setNotesData(filterArray);
  };

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("viewClientVeg"));
    setNotesDataLocal(userMsgData);
    setNotesData(userMsgData);
  }, []);

  useEffect(() => {
    var userMsgData = JSON.parse(localStorage.getItem("viewClientVeg"));
    if (!Array.isArray(userMsgData)) {
      userMsgData = [];
    }
    localStorage.setItem("viewClientVeg", JSON.stringify(userMsgData));
    var o = userMsgData.map((value, i) => {
      return value.vegetables;
    });
    var names = o;
    var uniq = names
      .map((name) => {
        return { count: 1, name: name };
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count;
        return a;
      }, {});

    var sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b]);

    setSortedName(sorted);
  }, [5]);
  const setInputBox = (value) => {
    setSearchText({ search: value });
    console.log(value);
  };
  const AllValue = () => {
    var userMsgData = JSON.parse(localStorage.getItem("viewClientVeg"));
    setNotesDataLocal(userMsgData);
    setNotesData(userMsgData);
  };
  const handleBuy = (value) => {
    var Buy = JSON.parse(localStorage.getItem("Buy"));
    if (!Array.isArray(Buy)) Buy = [];
    Buy.push(value);
    localStorage.setItem("Buy", JSON.stringify(Buy));
    dispatch(increment());
  };

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "65px",
          backgroundColor: "white",
          zIndex: 999,
          padding: "10px",
        }}
      >
        <div>
          <form onSubmit={HandleSubmit}>
            <TextField
              variant="outlined"
              required
              fullWidth
              value={searchText.search}
              id="search"
              label="Search Categories"
              name="search"
              autoComplete="search"
              onChange={HandleChange}
              style={{ marginBottom: "10px" }}
              InputProps={{ style: { height: 48 } }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
            >
              Search
            </Button>
          </form>
          <Button
            style={{ marginTop: "5px" }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={AllValue}
          >
            Find All
          </Button>
        </div>
        <h1 style={{ margin: "5px 0" }}>
          {Array.isArray(sortedName) &&
            sortedName.map((value, i) => {
              return (
                <Button
                  key={i}
                  variant="outlined"
                  color="secondary"
                  onClick={() => setInputBox(value)}
                  style={{ margin: "0 5px" }}
                >
                  {value}
                </Button>
              );
            })}
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {Array.isArray(notesData) &&
          notesData.map((value, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    width: "200px",
                    border: "1px solid black",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h4>{value.vegetables}</h4>
                  <h4>{value.fruits}</h4>
                  <h4>{value.price}</h4>
                  <h4>{value.fresh}</h4>
                  <h4>{value.validity}</h4>
                  <Button
                    type="submit"
                    onClick={() => handleBuy(value)}
                    variant="contained"
                    fullWidth
                  >
                    Buy
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VegList;
