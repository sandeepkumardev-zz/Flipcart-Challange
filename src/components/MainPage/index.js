import React from "react";
import MediaCard from "./Cart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

function MainPage({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data?.map((item) => (
        <MediaCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default MainPage;
