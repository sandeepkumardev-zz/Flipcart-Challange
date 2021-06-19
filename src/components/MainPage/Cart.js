import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: "5px",
    "& .MuiCardContent-root": {
      padding: "8px",
    },
    "& .MuiTypography-h6": {
      color: "#3B3B3B",
      lineHeight: 1,
    },

    "& .MuiCardActions-root": {
      padding: "0px 4px",
    },
    "& .MuiTypography-root": {
      fontWeight: "bold",
    },
  },
  media: {
    height: 300,
  },
});

export default function MediaCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data?.link}
          title={data?.product}
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {data?.product}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {data?.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2">₹ {data?.price}</Typography>
        <Typography variant="body2">Size: {data?.size}</Typography>
      </CardActions>
    </Card>
  );
}
