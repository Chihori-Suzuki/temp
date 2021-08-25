import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { Alert } from "@material-ui/lab";

const useStyle = makeStyles(() => {
  return {
    topTitle: {
      fontFamily: "Dancing Script",
      color: "#1C1B1B",
      marginTo: 0,
      marginBottom: "15%",
      padding: 0,
      fontSize: "80px",
      fontWeight: "300",
    },
    grid: {
      textAlign: "center",
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    loginbtn: {
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
    link: {
      textDecoration: "none",
    },
  };
});
const Login = () => {
  const classes = useStyle();
  const topTitle = "Login";
  const emailRef = useRef();
  const passRef = useRef();
  const { currentUser, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passRef.current.value);
      // history.push("/post");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        className={classes.grid}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <h1 className={classes.topTitle}>{topTitle}</h1>
        </Grid>
        <Grid item>{error && <Alert severity="error">{error}</Alert>}</Grid>
        <Grid item container>
          <TextField
            id="email"
            type="email"
            label="email"
            required
            fullWidth
            variant="outlined"
            inputRef={emailRef}
          />
        </Grid>
        <Grid item container>
          <TextField
            id="password"
            type="password"
            label="password"
            fullWidth
            variant="outlined"
            required
            inputRef={passRef}
          />
        </Grid>
        <Grid item container justifyContent="center">
          <button
            id="login-btn"
            className={classes.loginbtn}
            disabled={loading}
            type="submit"
          >
            Login
          </button>
        </Grid>

        {currentUser ? (
          <Grid item id="menu" container justify="center">
            <Grid item>
              <p>☆ 会員専用メニュー ☆</p>
            </Grid>
            <Grid item container direction="row" justify="center">
              <Link to="/signup" className={classes.link}>
                <Button id="signup-btn" className={classes.loginbtn}>
                  Sign Up
                </Button>
              </Link>
              <Link to="/contactlist" className={classes.link}>
                <Button id="contactlist-btn" className={classes.loginbtn}>
                  Contact List
                </Button>
              </Link>
              <Link to="/news" className={classes.link}>
                <Button className={classes.loginbtn}>News Edit</Button>
              </Link>
              <Link
                to={{
                  pathname: "/post",
                  state: { isEdit: false },
                }}
                className={classes.link}
              >
                <Button className={classes.loginbtn}>News Post</Button>
              </Link>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </form>
  );
};

export default Login;
