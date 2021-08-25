import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import Logout from "../comps/Logout";

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
    label: {
      textAlign: "left",
      display: "block",
    },
    form: {
      flexDirection: "column",
    },
    input: {
      border: "1px solid #ddd",
      display: "block",
    },
    loginbtn: {
      background: "#FF7193",
      color: "white",
    },
  };
});
const Signup = () => {
  const classes = useStyle();
  const topTitle = "Sign up";
  const emailRef = useRef();
  const passRef = useRef();
  const passComfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passRef.current.value !== passComfRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      history.push("/post");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div>
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
          <Grid item container>
            <TextField
              id="password-confirm"
              type="password"
              label="password confirm"
              fullWidth
              variant="outlined"
              required
              inputRef={passComfRef}
            />
          </Grid>
          <Grid item>
            <Button
              disabled={loading}
              variant="contained"
              type="submit"
              className={classes.loginbtn}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Logout />
    </div>
  );
};

export default Signup;
