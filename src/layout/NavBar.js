/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  nav:{
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
    border: "solid 1px black",
    padding:"2px",
  },
  nav_link:{
    margin: "3px",
    alignItems: "center",
    justifyContent: "space-around",
  },

});
function NavBar() {
  const classes = useStyles();
  return (
        <ul className={classes.nav}>
          <li>
            <Link className={classes.nav_link} to="/">home</Link>
          </li>
          <li>
            <Link className={classes.nav_link} to="/order">order</Link>
          </li>
          <li>
            <Link className={classes.nav_link} to="/cart">cart</Link>
          </li>
          <li>
            <Link className={classes.nav_link} to="/acount">acount</Link>
          </li>
        </ul>
  );
}
export default NavBar;
