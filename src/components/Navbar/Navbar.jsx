import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import useStyle from "./style";

import logo from "../../assets/sample-logo.png";

const Navbar = ({ totalItems }) => {
  const classes = useStyle();
  const location = useLocation();

  if (location.pathname === "/") {
  }
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img src={logo} alt="Commerce.js" width={20} height={20} />
            ALOHA Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
