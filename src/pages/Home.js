import { Grid, makeStyles, Paper } from "@material-ui/core";

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
      fontFamily: "Ruthie",
      position: "absolute",
      color: "white",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      margin: 0,
      padding: 0,

      [theme.breakpoints.down("sm")]: {
        fontSize: "50px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "120px",
        fontWeight: "300",
      },
    },
    subtitle: {
      position: "absolute",
      color: "white",

      [theme.breakpoints.down("xs")]: {
        letterSpacing: "0.25em",
        top: "70%",
        left: "50%",
        fontSize: "16px",
        fontWeight: "300",
      },
      [theme.breakpoints.down("sm")]: {
        letterSpacing: "0.25em",
        top: "65%",
        left: "50%",
        fontSize: "16px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("md")]: {
        letterSpacing: "0.25em",
        top: "60%",
        left: "50%",
        fontSize: "23px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("lg")]: {
        letterSpacing: "0.25em",
        top: "60%",
        left: "50%",
        fontSize: "25px",
        fontWeight: "500",
      },
      transform: "translate(-50%,-50%)",
    },

    title: {
      fontFamily: "Dancing Script",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        fontWeight: "500",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "50px",
        fontWeight: "600",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "60px",
        fontWeight: "700",
      },
    },
    paper: {
      background: "#FFF",
      paddingLeft: "20%",
      paddingRight: "20%",
      paddingTop: "5%",
      paddingBottom: "10%",
    },
    gridcon: {
      marginLeft: "10%",
      marginRight: "10%",
    },
    griditem: {
      display: "flex",
      flexDirection: "column",
    },
    box: {
      border: "solid",
      borderWidth: "thin",
      margin: "2rem",
      padding: "2rem 2rem",
    },
    box1: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    paraTitle: {
      fontSize: "32px",
      fontWeight: 400,
      letterSpacing: "0.2rem",
    },
    paragraph: {
      fontSize: "20px",
      fontWeight: 200,
      lineHeight: "2rem",
      textAlign: "left",
    },
    youtube: {
      position: "relative",
      paddingBottom: "56.25%",
    },
    iframe: {
      position: "absolute",
      width: "100%",
      height: "100%",
      border: "none",
    },
  };
});
const Home = () => {
  const classes = useStyle();
  const topTitle = "La Fontaine...";
  return (
    <div className="home">
      <Paper className={classes.topPaper} elevation={0}>
        <img className={classes.image} src="topImage.jpg"></img>
        <h1 className={classes.topTitle}>{topTitle}</h1>
        <h2 className={classes.subtitle}>
          Ladies singers in Utsunomiya & Tokyo
        </h2>
      </Paper>
      <Paper className={classes.paper}>
        <p className={classes.title}>Our music</p>
        <Grid container className={classes.youtube}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/OZdu_vyPbCQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
