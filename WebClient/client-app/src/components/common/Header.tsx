import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      color: "white",
    },
  })
);

export default function Header(props: any) {
  const classes = useStyles();

  function checkIsAuthenicated() {
    return props.login.userId !== undefined ? true : false;
  }

  function logOut() {
    if (checkIsAuthenicated()) {
      props.actions.logout();
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Company Portal
          </Typography>

          {checkIsAuthenicated() && (
            <NavLink to="/home">
              <Button className={classes.button}>Home</Button>
            </NavLink>
          )}
          {checkIsAuthenicated() && (
            <NavLink to="/companies">
              <Button className={classes.button}>Companies</Button>
            </NavLink>
          )}
          <NavLink to="/">
            <Button className={classes.button} onClick={() => logOut()}>
              {checkIsAuthenicated() ? "Logout" : "Login"}
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
