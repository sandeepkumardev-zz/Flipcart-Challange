import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#2874F0",
    },
    "& .MuiToolbar-gutters": {
      padding: "0px 50px",
      [theme.breakpoints.up("md")]: {
        padding: "0px 200px",
      },
    },
    "& .MuiToolbar-regular": {
      minHeight: "54px",
    },
  },
  logo: {
    width: "auto",
    height: "20px",
  },
  link: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  yellow: {
    color: "yellow",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    color: "#fff",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.link}>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt=""
              className={classes.logo}
            />
            <span className={classes.text}>
              Explore
              <span className={classes.yellow}>
                Plus
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                  height="12px"
                />
              </span>
            </span>
          </div>
          <div className={classes.grow} />
          <Button className={classes.button} startIcon={<ShoppingCartIcon />}>
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
