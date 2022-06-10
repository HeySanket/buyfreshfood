import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid, Container } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    marginTop: theme.spacing(2),
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
const Packages = () => {
  const [packageData, setPackageData] = useState({
    vegetables: "",
    fruits: "",
    price: "",
    fresh: "",
    validity: "",
  });
  const [validate, setValidate] = useState({
    vegetables: false,
    fruits: false,
    price: false,
    fresh: false,
    validity: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    vegetables: "",
    fruits: "",
    price: "",
    fresh: "",
    validity: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageData({ ...packageData, [name]: value });
    userValidate(name, value);
  };
  const [age, setAge] = React.useState("");

  const setValidationState = (name, status, message) => {
    setValidate({ ...validate, [name]: status });
    setErrorMsg({ ...errorMsg, [name]: message });
  };
  const userValidate = (name, value) => {
    switch (name) {
      case "vegetables": {
        var numbers = /^[0-9]+$/;
        if (value.length < 2) {
          setValidationState(name, true, "More then 2 characters");
        } else if (!isNaN(value)) {
          setValidationState(name, true, "Number Not Allowed");
        } else {
          setValidationState(name, false, "");
        }
        break;
      }
      case "fruits": {
        var numbers = /^[0-9]+$/;
        if (value.length < 2) {
          setValidationState(name, true, "More then 2 characters");
        } else if (!isNaN(value)) {
          setValidationState(name, true, "Number Not Allowed");
        } else {
          setValidationState(name, false, "");
        }
        break;
      }
      case "price": {
        if (!/[0-9]/.test(value)) {
          setValidationState(name, true, "text not Allowed");
        } else if (value.length <= 2) {
          setValidationState(name, true, "price  Here");
        } else {
          setValidationState(name, false, "");
        }
        break;
      }
      case "fresh": {
        var numbers = /^[0-9]+$/;
        if (value.length < 2) {
          setValidationState(name, true, "More then 2 characters");
        } else if (!isNaN(value)) {
          setValidationState(name, true, "Number Not Allowed");
        } else {
          setValidationState(name, false, "");
        }
        break;
      }
    }
  };
  const resetValue = () => {
    setPackageData({
      vegetables: "",
      fruits: "",
      price: "",
      fresh: "",
      validity: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      packageData.vegetables != "" &&
      packageData.fruits != "" &&
      packageData.price != "" &&
      packageData.fresh != "" &&
      packageData.validity != ""
    ) {
      const date = Date.now();
      const dateString = date.toString();
      var allVegetablesList = JSON.parse(
        localStorage.getItem("vegetablesList")
      );
      if (!Array.isArray(allVegetablesList)) allVegetablesList = [];
      const packageDataId = { ...packageData, Id: dateString };
      allVegetablesList.push(packageDataId);
      localStorage.setItem("vegetablesList", JSON.stringify(allVegetablesList));
      // Swal.fire("Good job!", "You Added vegetable!", "success");
      resetValue();
    } else {
      Swal.fire("Fill Data!", "Fill data", "error");
    }
  };
  return (
    <>
      {/* <Container component="main" maxWidth="md"> */}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <div className={`${classes.marginTop}`}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="vegetables"
                    value={packageData.vegetables}
                    label="Vegetables"
                    variant="outlined"
                    error={validate.vegetables}
                    helperText={errorMsg.vegetables}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="fruits"
                    value={packageData.fruits}
                    label="Fruits"
                    variant="outlined"
                    error={validate.fruits}
                    helperText={errorMsg.fruits}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="price"
                    value={packageData.price}
                    label="Price Will Be 3 Digit"
                    variant="outlined"
                    error={validate.price}
                    helperText={errorMsg.price}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Fresh
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={packageData.fresh}
                      name="fresh"
                      onChange={handleChange}
                      label="Fresh"
                      error={validate.fresh}
                      helperText={errorMsg.fresh}
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Validity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={packageData.validity}
                      fullWidth
                      name="validity"
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="1 Day">1 Day</MenuItem>
                      <MenuItem value="2 Day">2 Day</MenuItem>
                      <MenuItem value="3 Day">3 Day</MenuItem>
                      <MenuItem value="4 Day">4 Day</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button fullWidth type="submit" variant="contained">
                    Add
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
      {/* </Container> */}
    </>
  );
};

export default Packages;
