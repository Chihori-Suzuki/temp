import { Paper, makeStyles, Grid } from "@material-ui/core";
import NewsContents from "../comps/NewsContents";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";

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

const News = () => {
  const classes = useStyle();
  const topTitle = "News";
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  // async function handleLogout() {
  //   setError("");
  //   try {
  //     await logout();
  //     history.push("/login");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }
  return (
    <div className="news">
      <Paper className={classes.topPaper} elevation={0}>
        <img className={classes.image} src="News.jpg"></img>
        <h1 className={classes.topTitle}>{topTitle}</h1>
      </Paper>
      <Grid
        container
        className={classes.grid}
        direction="column"
        alignItems="center"
      >
        <NewsContents />
      </Grid>
    </div>
  );
};

export default News;
