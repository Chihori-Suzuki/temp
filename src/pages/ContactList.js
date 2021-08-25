import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ContactContents from "../comps/ContactContents";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Logout from "../comps/Logout";

const useStyle = makeStyles((theme) => {
  return {
    grid: {
      display: "block",
      paddingTop: "5%",
      paddingBottom: "5%",

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
      btn: {
        background: "#FF7193",
        color: "white",
      },
      link: {
        textDecoration: "none",
      },
    },
  };
});

export default function ContactList() {
  const classes = useStyle();
  const [ error, setError ] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <Grid
      container
      className={classes.grid}
      direction="column"
      alignItems="center"
    >
      <ContactContents />
      <Logout />
    </Grid>
  );
}
