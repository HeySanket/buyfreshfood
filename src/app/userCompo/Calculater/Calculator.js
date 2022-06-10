import react, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
export default function Calculator({ openCal, setOpenCal }) {
  const [value, setValue] = useState("");
  const handleClose = () => {
    setOpenCal(false);
  };
  const calValue = (e) => {
    setValue(value + e);
  };
  const claCu = () => {
    setValue(eval(value));
  };
  const clearAll = () => {
    setValue("");
  };
  const backSpace = () => {
    setValue(value.slice(0, value.length - 1));
  };
  return (
    <div>
      <Dialog open={openCal} onClose={handleClose}>
        <DialogTitle>Calculator</DialogTitle>
        <DialogContent>
          <div style={{ width: "300px" }}>
            <table style={{ width: "100%", marginTop: "10px" }}>
              <tr>
                <td colspan="3">
                  <form>
                    <TextField
                      fullWidth
                      type="text"
                      value={value}
                      label="Value"
                    />
                  </form>
                </td>
              </tr>
            </table>
            <table style={{ width: "100%", marginTop: "10px" }}>
              <tr>
                <td>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={backSpace}
                  >
                    Back
                  </Button>
                </td>
                <td colSpan="2">
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={claCu}
                  >
                    =
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("1")}
                  >
                    1
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("2")}
                  >
                    2
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("3")}
                  >
                    3
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("4")}
                  >
                    4
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("5")}
                  >
                    5
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("6")}
                  >
                    6
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("7")}
                  >
                    7
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("8")}
                  >
                    8
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("9")}
                  >
                    9
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => calValue("0")}
                  >
                    0
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => calValue("*")}
                  >
                    *
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => calValue("/")}
                  >
                    /
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => calValue("+")}
                  >
                    +
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => calValue("-")}
                  >
                    -
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    onClick={clearAll}
                  >
                    Clear
                  </Button>
                </td>
              </tr>
            </table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
