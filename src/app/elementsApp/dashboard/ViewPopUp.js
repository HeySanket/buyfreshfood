import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ReactToPdf from "react-to-pdf";
import { Button, Paper } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
const ViewPopUp = ({ open, setOpen, shopData }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const ref = React.createRef();
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [4, 2],
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div ref={ref} style={{ width: 500, height: 500, padding: 4 }}>
          <div>
            <Paper>
              <div
                style={{
                  backgroundColor: "red",
                  textAlign: "center",
                }}
              >
                <span>
                  {shopData.shopImg && shopData.shopImg.toUpperCase()}
                </span>
              </div>
              <div>
                Name :-
                <span>{shopData.firstName}</span>
                <span>{shopData.lastName}</span>
                <div>
                  Mobile:-
                  <span>{shopData.mobile}</span>
                </div>
                <div>
                  profit_In_A_Day :-
                  <span>{shopData.profit_In_A_Day}</span>
                </div>
                <div>
                  shop Age:-
                  <span>{shopData.shopAge}</span>
                </div>
                shop Name:-
                <span>{shopData.shopName}</span>
              </div>
            </Paper>
          </div>
        </div>

        <ReactToPdf
          targetRef={ref}
          filename={`${shopData.firstName}-${shopData.lastName}.pdf`}
          options={options}
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => (
            <Button type="button" variant="contained" onClick={toPdf}>
              Download pdf
              <DownloadIcon style={{ marginLeft: "5px" }} />
            </Button>
          )}
        </ReactToPdf>
      </Dialog>
    </div>
  );
};

export default ViewPopUp;
