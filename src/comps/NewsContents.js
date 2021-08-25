import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import firebase from "../service/firebase";
import { useAuth } from "../contexts/AuthContext";
import Logout from "../comps/Logout";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => {
  return {
    textGrid: {},
    image: {
      margin: "auto",
    },
    img: {
      float: "left",
      margin: "auto",
      display: "block",
    },
    paper: {
      display: "flex",
      padding: "5%",
      width: "100%",
      marginBottom: "5%",
    },
    item2: {
      overflowWrap: "break-word",
      overflow: "hidden",
      textAlign: "center",
    },
    btn: {
      background: "#FF7193",
      color: "white",
      margin: "3%",
    },
    link: {
      textDecoration: "none",
    },
  };
});
const NewsContents = () => {
  const classes = useStyle();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const ref = firebase.firestore().collection("news");

  function getNews() {
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
      setNews(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // delete the data from firestore database
  function deleteNews(delNews) {
    window.confirm("データを削除してもいいですか？");
    ref
      .doc(delNews.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" direction="column" spacing={2}>
              <Grid item className={classes.image}>
                <img
                  src={item.image}
                  className={classes.img}
                  height="auto"
                  width="100%"
                />
              </Grid>
              <Grid item className={classes.item2} container direction="column">
                <Grid item>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </Grid>
                <Grid item>
                  <div style={{whiteSpace: 'pre-line'}}>
                    <p>{item.detail}</p>
                  </div>
                </Grid>
                {currentUser ? (
                  <Grid item container direction="column" justify="center">
                    <Grid item>
                      <Link
                        to={{
                          pathname: "/post",
                          state: { isEdit: true, item },
                        }}
                        className={classes.link}
                      >
                        <Button className={classes.btn}>Edit</Button>
                      </Link>
                      <Button
                        className={classes.btn}
                        onClick={() => deleteNews(item)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}

      <Logout />
    </div>
  );
};

export default NewsContents;
