import * as React from "react";
import Dialog from "@mui/material/Dialog";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function EditDialog({ editValue, open, setOpen, updateState }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [packageData, setPackageData] = React.useState({
    vegetables: "",
    fruits: "",
    price: "",
    fresh: "",
    validity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageData({ ...packageData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    console.log(packageData);
    updateData();
  };

  const updateData = () => {
    var vegetablesList = JSON.parse(localStorage.getItem("vegetablesList"));
    var spliceId = null;
    for (let i = 0; i <= vegetablesList.length - 1; i++) {
      if (vegetablesList[i].Id == editValue.Id) {
        spliceId = i;
      }
    }
    vegetablesList.splice(spliceId, 1, packageData);
    localStorage.setItem("vegetablesList", JSON.stringify(vegetablesList));
    var vegetablesList1 = JSON.parse(localStorage.getItem("vegetablesList"));

    console.log(vegetablesList1);
    updateState(vegetablesList1);
    // setPackageData(vegetablesList1);
    console.log(spliceId, "splice Id");
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    var vegetablesList = JSON.parse(localStorage.getItem("vegetablesList"));
    // var io = vegetablesList.filter((value, i) => {
    //   return value.Id == editValue.Id;
    // });
    // var po = { ...io[0] };
    // setPackageData(po);

    if (vegetablesList) {
      for (let o of vegetablesList) {
        if (o.Id == editValue.Id) {
          setPackageData(o);
          console.log(o, "ppp");
        }
        console.log(editValue.Id, "iii");
      }
    }
  }, [open]);
  console.log(updateState, "updateState");
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div style={{ padding: "10px", margin: "10px" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="vegetables"
              label="Vegetables"
              variant="outlined"
              value={packageData.vegetables}
              onChange={handleChange}
              style={{ margin: "10px" }}
              fullWidth
            />
            <TextField
              name="fruits"
              label="fruits"
              variant="outlined"
              value={packageData.fruits}
              onChange={handleChange}
              style={{ margin: "10px" }}
              fullWidth
            />
            <TextField
              name="price"
              label="price"
              variant="outlined"
              value={packageData.price}
              onChange={handleChange}
              style={{ margin: "10px" }}
              fullWidth
            />
            <FormControl fullWidth style={{ margin: "10px" }}>
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
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ margin: "10px" }}>
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
                label="validity"
              >
                <MenuItem value="1 Day">1 Day's</MenuItem>
                <MenuItem value="2 Day">2 Day's</MenuItem>
                <MenuItem value="3 Day">3 Day's</MenuItem>
                <MenuItem value="4 Day">4 Day's</MenuItem>
              </Select>
            </FormControl>
            <Button fullWidth type="submit" variant="contained">
              Edit
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
