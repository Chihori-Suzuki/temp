import { Grid, makeStyles, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import firebase from "../service/firebase";

// import { useHistory } from "react-router";

const useStyle = makeStyles(() => {
  return {
    paper: {
      display: "flex",
      padding: "5%",
      width: "100%",
      marginTop: "2%",
      marginBottom: "5%",
    },
    item2: {
      overflowWrap: "break-word",
      overflow: "hidden",
      textAlign: "center",
    },
  };
});
const ContactContents = () => {
  const classes = useStyle();

  const [contact, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const history = useHistory();

  const ref = firebase.firestore().collection("contacts");

  function getContacts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      items.sort(function (a, b) {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      setContacts(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getContacts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {contact.map((item) => (
        <div key={item.id}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" direction="column" spacing={2}>
              <Grid item>
                <h5>Name:</h5>
                <p>{item.name}</p>
              </Grid>
              <Grid item>
                <h5>Email:</h5>
                <p>{item.email}</p>
              </Grid>
              <Grid item>
                <h5>Message:</h5>
                <p>{item.message}</p>
              </Grid>
              <Grid item>
                <h5>Date:</h5>
                <p>{item.date}</p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default ContactContents;
