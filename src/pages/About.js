import { Grid, makeStyles, Paper } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";

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
      letterSpacing: "0.2rem",
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
      textAlign: "center",
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
    },
    logo: {
      fontFamily: "Ruthie",
      fontSize: "102px",
      color: "#FF81A6",
      fontWeight: "500",

      [theme.breakpoints.down("sm")]: {
        fontSize: "50px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "102px",
        fontWeight: "300",
      },
    },
    paragraph: {
      maxWidth: "100vw",
      overflowWrap: "break-word",
      textAlign: "left",
      fontSize: "20px",
      fontWeight: "300",
      marginBottom: "10%",
    },
    items: {
      listStyle: "none",
      minWidth: "100%",
      position: "relative",
      marginBottom: "10%",
    },
    icon: {
      float: "left",
      color: "#FF81A6",
      position: "relative",
      overflow: "hidden",
      marginLeft: "20px",
      padding: 0,
    },
    timelineContent: {
      float: "left",
      borderLeft: "3px #FF81A6 solid",
      marginLeft: "30px",
      paddingLeft: "30px",
      paddingBottom: "10%",
      position: "absolute",
    },
    paragraph2: {
      maxWidth: "100vw",
      overflowWrap: "break-word",
      textAlign: "left",
      fontSize: "20px",
      fontWeight: "300",
      margin: 0,
    },
    image2: {
      marginTop: "15%",
    },
  };
});
const About = () => {
  const classes = useStyle();
  const topTitle = "About us";
  return (
    <div className="about">
      <Paper className={classes.topPaper} elevation={0}>
        <img className={classes.image} src="about.jpg"></img>
        <h1 className={classes.topTitle}>{topTitle}</h1>
      </Paper>
      <Grid
        container
        direction="column"
        className={classes.grid}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <h1 className={classes.logo}>La Fontaine...</h1>
        </Grid>
        <Grid item>
          <p className={classes.paragraph}>
            Fontaineは、フランス語で「泉」を意味します。 <br />
            水は命の源で、それがあふれる場所。 <br />
            <br />
            生命力あふれる場所から、皆さんに元気をお届けしたい、文化を発信していきたいという思いからこの名前を付けました。{" "}
            <br />
            <br />
            ちなみに...には、これから先も長く、そして完結することなく、この団を続けていくことができますようにという願いを込めています。（Laは女声冠詞）{" "}
            <br />
            <br />
            ～「皆さんにとって、故郷のようにあたたかい場所であること」 <br />
            　「本物の、上質な音楽を常に創り続ける場所であること」​　を目指して。～
          </p>
        </Grid>

        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <p className={classes.paragraph2}>
              2016年12月、結成。
              <br /> 栃木を中心に活動を開始。
            </p>
          </div>
        </li>
        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <p className={classes.paragraph2}>
              2017年10月
              <br />
              新潟県にて初の単独コンサートを実施。 <br />
              本格的に活動をスタート。
            </p>
          </div>
        </li>
        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <p className={classes.paragraph2}>
              2018年2月、 第一回定期演奏会を実施。
            </p>
          </div>
        </li>
        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <p className={classes.paragraph2}>
              2021年現在、 さらなる高みを目指して活動中.
              <br />
            </p>
          </div>
        </li>
        <img
          className={classes.image2}
          src="aboutbelow.jpg"
          width="100%"
          height="auto"
        />
      </Grid>
    </div>
  );
};

export default About;
