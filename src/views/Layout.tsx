import { AppBar, Button, Paper, Toolbar, Typography } from "@material-ui/core";
import "./Layout.scss";
import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
export interface ILayoutProps {}

export const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            //   className={classes.title}
          >
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="layout">{children}</div>
    </>
  );
};
