import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const SearchEn = ({ updateTab }) => {
  const [search, setSearch] = useState("");
  const [shoData, setShoData] = useState([]);
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearch(value);
    console.log(search);
  };

  const sendData = (e) => {
    updateTab(e);
  };

  useEffect(() => {
    var shopList = JSON.parse(localStorage.getItem("pdfShopList"));
    setShoData(shopList);
  }, []);

  return (
    <div>
      <form>
        <TextField
          name="search"
          onChange={handleSearch}
          type="text"
          placeholder="Search Shop Name"
          fullWidth
          autoComplete="off"
          InputProps={{ style: { height: 48 } }}
        />
      </form>
      {shoData &&
        shoData
          .filter((value) => {
            if (search == "") {
              return value;
            } else if (
              value.shopName.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value, i) => {
            return (
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  margin: "3px 0",
                  backgroundColor: "#2778c4",
                  cursor: "pointer",
                }}
                className="hover"
                key={i}
                onClick={() => sendData(value)}
              >
                <span> {value.shopName}</span>
              </div>
            );
          })}
    </div>
  );
};
export default SearchEn;
