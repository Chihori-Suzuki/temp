import { Paper, makeStyles, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { db } from "../service/firebase";
import { v4 as uuidv4 } from "uuid";

const useStyle = makeStyles((theme) => {
  return {
    topPaper: {
      display: "block",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    topTitle: {
      fontFamily: "Dancing Script",
      position: "absolute",
      color: "white",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      margin: 0,
      padding: 0,

      [theme.breakpoints.down("sm")]: {
        fontSize: "60px",
        fontWeight: "500",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "70px",
        fontWeight: "600",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "100px",
        fontWeight: "700",
      },
    },
    grid: {
      paddingTop: "8%",
      paddingBottom: "8%",
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        paddingLeft: "10%",
        paddingRight: "10%",
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: "20%",
        paddingRight: "20%",
      },
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "25%",
        paddingRight: "25%",
      },
    },

    paragraph: {
      maxWidth: "100vw",
      overflowWrap: "break-word",
      textAlign: "left",
      fontSize: "18px",
      fontWeight: "300",
      marginBottom: "10%",
      lineHeight: "1.5em",
    },
    flex: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
    submitBtn: {
      color: "white",
      fontSize: "16px",
      background: "#FF7193",
      margin: "5%",
      paddingLeft: "3%",
      paddingRight: "3%",
      paddingTop: "2%",
      paddingBottom: "2%",
      border: "none",
      borderRadius: "4px",
    },
  };
});

const Contact = () => {
  const classes = useStyle();
  const topTitle = "Contact";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  let today = new Date();
  let date = `${today.getFullYear()} / ${today.getMonth()} / ${today.getDate()}`;

  // const functions = require("firebase-functions");
  // const nodemailer = require("nodemailer");

  // const cors = require("cors")({ origin: true });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        id: uuidv4(),
        name: name,
        email: email,
        message: message,
        date: date,
      })
      .then(() => {
        alert("???????????????????????????????????????????");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact">
      <Paper className={classes.topPaper} elevation={0}>
        <img className={classes.image} src="topImage.jpg"></img>
        <h1 className={classes.topTitle}>{topTitle}</h1>
      </Paper>

      <form onSubmit={handleSubmit}>
        <Grid container direction="column" className={classes.grid}>
          <Grid item>
            <h3>??????????????????</h3>
          </Grid>
          <Grid item>
            <p className={classes.paragraph}>
              ?????????????????????????????????????????????????????????????????????
              <br />
              <br />
              ?????????La Fontaine????????????????????????????????????
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              <br />
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </p>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item sm={12} md={6}>
              <TextField
                required
                className={classes.flex}
                id="name-required"
                fullWidth
                label="name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                required
                className={classes.flex}
                type="email"
                id="email-required"
                fullWidth
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              required
              className={classes.flex}
              id="text-required"
              label="message"
              variant="outlined"
              fullWidth
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item container justify="center">
            <button
              variant="contained"
              type="submit"
              size="medium"
              className={classes.submitBtn}
              style={{ background: loader ? "#ccc" : "#FF7193" }}
            >
              Submit
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
