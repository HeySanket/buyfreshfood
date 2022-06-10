import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    marginTop: theme.spacing(17),
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
    marginTop: theme.spacing(9),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  padding: {
    padding: "5px",
  },
}));
const WhatsApp = () => {
  const CHARACTER_LIMIT = 100;

  //   const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const classes = useStyles();
  const [formData, setFormData] = useState({
    message: "",
  });

  const { message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
      let number = 918421842224;
      console.log(number, "Number");

      let url = `https://web.whatsapp.com/send?phone=${number}`;

      url += `&text=${encodeURI("Hello Sanket " + message)}&app_absent=0`;

      window.open(url);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className={`${classes.paper} ${classes.marginTop}`}>
              <Typography
                component="h1"
                variant="h5"
                style={{ marginBottom: "10px", textAlign: "center" }}
              >
                Connect With Sanket Using Real{" "}
                <span style={{ color: "red", textAlign: "center" }}>
                  WhatsApp
                </span>
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    label="Message"
                    placeholder="Hi! Sending a message from React...."
                    size="small"
                    inputProps={{
                      style: {
                        width: "230px",
                        height: "90px",
                      },
                      maxLength: CHARACTER_LIMIT,
                    }}
                    FormHelperTextProps={{
                      style: {
                        margin: 0,
                        padding: "0 0 0 5px",
                        fontSize: 10,
                      },
                    }}
                    name="message"
                    value={message}
                    onChange={onChange}
                    required
                    error={
                      message.length > CHARACTER_LIMIT - 1 || messageEmptyError
                    }
                    helperText={
                      !(message.length > CHARACTER_LIMIT - 1)
                        ? `${message.length}/${CHARACTER_LIMIT}`
                        : "Max length exceeded"
                    }
                  />
                  {messageEmptyError && (
                    <div className="errors">Message cannot be empty!</div>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    fullWidth
                    onClick={onSubmit}
                    type="submit"
                    variant="contained"
                  >
                    Send
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12}></Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default WhatsApp;
