import { Button, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyle = makeStyles(() => {
  return {
    grid: {
      marginTop: "5%",
      marginBottom: "5%",
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    btn: {
      background: "#AFAFAF",
      color: "white",
    },
    link: {
      textDecoration: "none",
    },
  };
});
const Logout = () => {
  const classes = useStyle();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  // console.log(history);
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
    <div id="logout">
      {error && <Alert severity="error">{error}</Alert>}
      {currentUser ? (
        <Grid container direction="column" className={classes.grid} spacing={2}>
          <Grid item container justifyContent="center">
            <Button variant="link" onClick={handleLogout}>
              Log out
            </Button>
          </Grid>
          <Grid item container justifyContent="center">
            <Link
              to={{
                pathname: "/login",
              }}
              className={classes.link}
            >
              <Button className={classes.btn}>
                <ArrowBackIosIcon />
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
};

export default Logout;
