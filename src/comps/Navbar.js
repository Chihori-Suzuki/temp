import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: "#FF81A6",
    textAlign: "left",
    fontFamily: "Ruthie",
    fontSize: "48px",
    fontWeight: "300",
    textDecoration: "none",

    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      fontWeight: "500",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px",
    },
  },
  link: {
    color: "#FF81A6",
    marginRight: theme.spacing(5),
    fontFamily: "montserrat",
    fontWeight: "thin",
    letterSpacing: "0.1rem",
    textDecoration: "none",

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      fontWeight: "500",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  },
  appbar: {
    background: "#FFFFFF",
    position: "fixed",
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      minHeight: 70,
    },
    [theme.breakpoints.up("md")]: {
      minHeight: 90,
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: 110,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.grow}>
            La Fontaine...
          </Link>
          <Link to="/news" className={classes.link}>
            News
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
