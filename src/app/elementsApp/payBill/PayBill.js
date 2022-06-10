import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Paper } from "@mui/material";
import TableList from "./TableList";
import { useSelector } from "react-redux";
const PayBill = () => {
  const [billValue, setBillValue] = useState({
    total: "",
    product: "",
    freshYes: "",
    freshNo: "",
  });
  const count = useSelector((state) => state.counter.value);
  React.useEffect(() => {
    var Buy = JSON.parse(localStorage.getItem("Buy"));
    if (Buy != null && Buy.length != 0) {
      const total = Buy.map((value) => {
        return parseInt(value.price);
      }).reduce((total, value) => {
        return total + value;
      });
      const freshYes = Buy.filter((value) => {
        return value.fresh.toLowerCase() == "yes";
      });
      const freshNo = Buy.filter((value) => {
        return value.fresh.toLowerCase() == "no";
      });
      console.log(freshNo, "freshNo");
      setBillValue({
        total: total,
        product: Buy.length,
        freshYes: freshYes.length,
        freshNo: freshNo.length,
      });
    }
  }, [count]);

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Paper
                style={{
                  padding: "30px 10px",
                  backgroundColor: `#${billValue.total
                    .toString()
                    .slice(0, 3)}644`,
                }}
                elevation={3}
              >
                Total Prise :-
                <span> {billValue.total}</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper
                style={{
                  padding: "30px 10px",
                  backgroundColor: `rgb(${billValue.product
                    .toString()
                    .slice(1, 2)},${billValue.product
                    .toString()
                    .slice(1, 2)}9,93)`,
                }}
                elevation={3}
              >
                Total Product :-&nbsp;
                <span>{billValue.product}</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper
                style={{
                  padding: "30px 10px",
                  backgroundColor: `#${billValue.freshYes
                    .toString()
                    .slice(1, 2)}66453`,
                }}
                elevation={3}
              >
                Fresh Product :-&nbsp;
                <span>{billValue.freshYes}</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper
                style={{
                  padding: "30px 10px",
                  backgroundColor: `#${billValue.freshNo
                    .toString()
                    .slice(1, 2)}12553`,
                }}
                elevation={3}
              >
                Not Fresh Product :- &nbsp;
                <span>{billValue.freshNo}</span>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <TableList />
    </div>
  );
};

export default PayBill;
