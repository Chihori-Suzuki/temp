import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { storage } from "../service/firebase";
import firebase from "../service/firebase";
import { v4 as uuidv4 } from "uuid";
import Logout from "../comps/Logout";

const useStyle = makeStyles(() => {
  return {
    topTitle: {
      fontFamily: "Dancing Script",
      color: "#1C1B1B",
      marginTo: 0,
      //   marginBottom: "1%",
      padding: 0,
      fontSize: "80px",
      fontWeight: "300",
    },
    grid: {
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    marginBtn: {
      marginBottom: "10%",
    },
    submitbtn: {
      background: "#FF7193",
      color: "white",
    },
  };
});
const NewPost = () => {
  const classes = useStyle();
  const topTitle = "Create Latest News";
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  const [title, setTitle] = useState(history.location.state.item.title);
  const [detail, setDetail] = useState(history.location.state.item.detail);
  let today = new Date();
  let date = `${today.getFullYear()} / ${today.getMonth()} / ${today.getDate()}`;

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(history.location.state.item.image);
  const [progress, setProgress] = useState(0);

  const ref = firebase.firestore().collection("news");

  const handleChange = (e) => {
    console.log(e);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // upload image
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytestTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  // add to firestore database
  function addNews(addNews) {
    ref
      .doc(addNews.id)
      .set(addNews)
      .catch((err) => {
        console.error(err);
      });
    history.push("/news");
  }
  // update
  function editNews(updatedNews) {
    ref
      .doc(updatedNews.id)
      .update(updatedNews)
      .catch((err) => {
        console.error(err);
      })
    history.push("/news");
  }

  return (
    <div>
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
        <Grid item>
          <h3>新しい記事を入力してねん</h3>
        </Grid>
        <Grid item container>
          <TextField
            id="title"
            // value={title}
            defaultValue={
              history.location.state.isEdit
                ? history.location.state.item.title
                : ""
            }
            fullWidth
            label="title"
            multiline
            variant="outlined"
            className={classes.TextField}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item container>
          <TextField
            id="text"
            className={classes.TextField}
            defaultValue={
              history.location.state.isEdit
                ? history.location.state.item.detail
                : ""
            }
            fullWidth
            label="text"
            multiline
            variant="outlined"
            multiline
            rows={6}
            onChange={(e) => setDetail(e.target.value)}
          />
        </Grid>
        <Grid item container justify="center">
          <p>載せたい写真を選択してね</p>
        </Grid>
        <Grid item container justify="center">
          <progress value={progress} max="100" />
        </Grid>
        <Grid item container justify="center" className={classes.marginBtn}>
          <input type="file" onChange={handleChange}></input>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </Grid>
        <Grid item container justify="center">
          <img
            src={url || "http://via.placeholder.com/100x100"}
            alt="image"
            width="100%"
            height="auto%"
          ></img>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            className={classes.submitbtn}
            onClick={() => {
              history.location.state.isEdit
                ? editNews({ 
                    title, 
                    detail, 
                    date: history.location.state.item.date, 
                    image: url, 
                    id: history.location.state.item.id,
                  })
                : addNews({
                    title,
                    detail,
                    date: date,
                    image: url,
                    id: uuidv4(),
                  });
            }}
          >
            submit
          </Button>
        </Grid>
      </Grid>
      <Logout />
    </div>
  );
};

export default NewPost;
